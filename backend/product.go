// handles all product related operations
package main

import (
	"log"
	"net/http"
	"time"
)

// --------------------------- Types ---------------------------

type Product struct {
	ID            int64     `json:"id"`
	Sku           string    `json:"sku"`
	Name          string    `json:"name"`
	Category      string    `json:"category"`
	Brand         string    `json:"brand"`
	Slug          string    `json:"slug"`
	OriginalPrice int64     `json:"original_price"`
	Discount      *int16    `json:"discount"`
	Stock         int       `json:"stock"`
	CreatedAt     time.Time `json:"created_at"`

	//Computed, not stored
	DiscountedPrice int64 `json:"discounted_price"`

	//Relationships
	Images  []ProductImage  `json:"images"`
	Reviews []ProductReview `json:"reviews"`
	Users   []User          `json:"users"`
}

type ProductImage struct {
	ID        int64  `json:"id"`
	ProductID int64  `json:"product_id"`
	Image     string `json:"image"`
	IsPrimary bool   `json:"is_primary"`
}

type ProductReview struct {
	ID          int64     `json:"id"`
	ProductID   int64     `json:"product_id"`
	UserID      int64     `json:"user_id"`
	StarCount   int16     `json:"star_count"`
	Description *string   `json:"description"`
	CreatedAt   time.Time `json:"created_at"`

	//Relationships
	Users   User          `json:"users"`
}

// --------------------------- Handlers ---------------------------

func (s *Store) GetAllProductsHandler(w http.ResponseWriter, r *http.Request) {
	products, err := s.getAllProducts()
	if err != nil {
		http.Error(w, "failed to retrieve all products", http.StatusInternalServerError)
		log.Printf("failed to retrieve product's list: %v", err)
		return
	}

	writeJSON(w, products)
}

func (s *Store) GetProductBySlugHandler(w http.ResponseWriter, r *http.Request) {
	slug := r.PathValue("slug")
	if slug == "" {
		http.Error(w, "missing slug", http.StatusBadRequest)
		return
	}
	products, err := s.getProductBySlug(slug)
	if err != nil {
		http.Error(w, "failed to retrieve product by slug", http.StatusInternalServerError)
		log.Printf("failed to retrieve product by slug: %v", err)
		return
	}
	writeJSON(w, products)
}

// mux.HandleFunc("/api/products/{slug}/reviews", nil)

func (s *Store) GetProductReviewsBySlugHandler(w http.ResponseWriter, r *http.Request) {
	slug := r.PathValue("slug")
	if slug == "" {
		http.Error(w, "missing slug", http.StatusBadRequest)
		return
	}
	products, err := s.getProductReviewsBySlug(slug)
	if err != nil {
		http.Error(w, "failed to retrieve product reviews", http.StatusInternalServerError)
		log.Printf("failed to retrieve product by slug: %v", err)
		return
	}
	writeJSON(w, products)
}

// --------------------------- Repositories ---------------------------

func (s *Store) getAllProducts() ([]Product, error) {
	rows, err := s.db.Query(`	
		SELECT
			id,
			sku,
			name,
			category,
			brand,
			slug,
			original_price,
			discount,
			stock,
			created_at
		FROM products
	`)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var out []Product
	for rows.Next() {
		var p Product

		if err := rows.Scan(&p.ID, &p.Sku, &p.Name, &p.Category, &p.Brand, &p.Slug, &p.OriginalPrice,
			&p.Discount, &p.Stock, &p.CreatedAt); err != nil {
			return nil, err
		}

		if p.Discount != nil {
			p.DiscountedPrice = p.OriginalPrice - ((int64(*p.Discount) * p.OriginalPrice) / 100)
		}

		images, err := s.getAllProductImages(p.ID)
		if err != nil {
			return nil, err
		}

		if images != nil {
			p.Images = images
		}

		reviews, err := s.getAllProductReviews(p.ID)
		if err != nil {
			return nil, err
		}

		if reviews != nil {
			p.Reviews = reviews
		}

		out = append(out, p)
	}
	return out, rows.Err()
}

func (s *Store) getProductBySlug(slug string) (*Product, error) {
	var p Product
	err := s.db.QueryRow(`
		SELECT
			id,
			sku,
			name,
			category,
			brand,
			slug,
			original_price,
			discount,
			stock,
			created_at
		FROM products
		WHERE slug = $1;
	`, slug).Scan(&p.ID, &p.Sku, &p.Name, &p.Category, &p.Brand, &p.Slug, &p.OriginalPrice, &p.Discount, &p.Stock, &p.CreatedAt)

	if err != nil {
		return nil, err
	}

	if p.Discount != nil {
		p.DiscountedPrice = p.OriginalPrice - ((int64(*p.Discount) * p.OriginalPrice) / 100)
	}

	images, err := s.getAllProductImages(p.ID)
	if err != nil {
		return nil, err
	}

	if images != nil {
		p.Images = images
	}

	reviews, err := s.getAllProductReviews(p.ID)
	if err != nil {
		return nil, err
	}

	if reviews != nil {
		p.Reviews = reviews
	}

	return &p, nil
}

func (s *Store) getProductReviewsBySlug(slug string) (*ProductReview, error) {
	var pr ProductReview
	var u User
	err := s.db.QueryRow(`
		SELECT
			pr.id,
			pr.product_id,
			pr.user_id,
			pr.star_count,
			pr.description,
			pr.created_at
		FROM product_reviews pr
		JOIN products p
			ON p.id = pr.product_id
		WHERE slug = $1;
	`, slug).Scan(&pr.ID, &pr.ProductID, &pr.UserID, &pr.StarCount, &pr.Description, &pr.CreatedAt)

	if err != nil {
		return nil, err
	}

	username, err := s.GetUsernameByID(pr.UserID)
	if err != nil {
		return nil, err
	}

	u.ID = pr.ID
	u.Username = *username
	pr.Users = u

	return &pr, nil
}

func (s *Store) getProductByID(id int64) (*Product, error) {
	var p Product
	err := s.db.QueryRow(`
		SELECT
			id,
			sku,
			name,
			category,
			brand,
			slug,
			original_price,
			discount,
			stock,
			created_at
		FROM products
		WHERE id = $1;
	`, id).Scan(&p.ID, &p.Sku, &p.Name, &p.Category, &p.Brand, &p.Slug, &p.OriginalPrice, &p.Discount, &p.Stock, &p.CreatedAt)

	if err != nil {
		return nil, err
	}

	if p.Discount != nil {
		p.DiscountedPrice = p.OriginalPrice - ((int64(*p.Discount) * p.OriginalPrice) / 100)
	}

	images, err := s.getAllProductImages(p.ID)
	if err != nil {
		return nil, err
	}

	if images != nil {
		p.Images = images
	}

	reviews, err := s.getAllProductReviews(p.ID)
	if err != nil {
		return nil, err
	}

	if reviews != nil {
		p.Reviews = reviews
	}

	return &p, nil
}

func (s *Store) getAllProductImages(productID int64) ([]ProductImage, error) {
	var pi []ProductImage
	rows, err := s.db.Query(`	
	SELECT
	id,
	product_id,
			image,
			is_primary
	FROM product_images 
	WHERE product_id = $1
	`, productID)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var i ProductImage
		if err := rows.Scan(&i.ID, &i.ProductID, &i.Image, &i.IsPrimary); err != nil {
			return nil, err
		}

		pi = append(pi, i)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return pi, nil
}

func (s *Store) getAllProductReviews(productID int64) ([]ProductReview, error) {
	var pr []ProductReview
	rows, err := s.db.Query(`	
	SELECT
			id,
			product_id,
			star_count,
			description,
			created_at
	FROM product_reviews 
	WHERE product_id = $1
	`, productID)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var r ProductReview
		if err := rows.Scan(&r.ID, &r.ProductID, &r.StarCount, &r.Description, &r.CreatedAt); err != nil {
			return nil, err
		}

		pr = append(pr, r)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return pr, nil
}

// --------------------------- Helpers ---------------------------
