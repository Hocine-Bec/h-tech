// handles all bundles operations
package main

import (
	"log"
	"net/http"
	"time"
)

// --------------------------- Types ---------------------------

type Bundle struct {
	ID         int64     `json:"id"`
	Name       string    `json:"name"`
	Label      string    `json:"label"`
	TotalPrice int64     `json:"total_price"`
	CreatedAt  time.Time `json:"created_at"`

	// Relationships

	BundleDetails []BundleDetail `json:"bundle_details"`
}

type BundleDetail struct {
	ID        int64 `json:"id"`
	BundleID  int64 `json:"bundle_id"`
	ProductID int64 `json:"product_id"`
	Quantity  int   `json:"quantity"`

	// Relationships
	Product *Product `json:"product,omitempty"`
}

// --------------------------- Handlers ---------------------------

func (s *Store) GetBundlesHandler(w http.ResponseWriter, r *http.Request) {
	bundles, err := s.getAllBundles()
	if err != nil {
		http.Error(w, "failed to retrieve bundles", http.StatusInternalServerError)
		log.Printf("failed to retrieve bundles: %v", err)
		return
	}

	writeJSON(w, bundles)
}

// --------------------------- Repositories ---------------------------

func (s *Store) getAllBundles() (*[]Bundle, error) {
	rows, err := s.db.Query(`
		SELECT id, name, label, total_price, created_at FROM bundles;
	`)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var out []Bundle
	for rows.Next() {
		var b Bundle

		if err := rows.Scan(&b.ID, &b.Name, &b.Label, &b.TotalPrice, &b.CreatedAt); err != nil {
			return nil, err
		}

		details, err := s.getAllBundleDetails(b.ID)
		if err != nil {
			return nil, err
		}
		b.BundleDetails = details
		out = append(out, b)
	}

	return &out, rows.Err()
}

func (s *Store) getAllBundleDetails(id int64) ([]BundleDetail, error) {
	rows, err := s.db.Query(`	
	SELECT
			id,
			bundle_id,
			product_id,
			quantity
	FROM bundle_details 
	WHERE id = $1
	`, id)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var out []BundleDetail
	for rows.Next() {
		var bd BundleDetail
		if err := rows.Scan(&bd.ID, &bd.BundleID, &bd.ProductID, &bd.Quantity); err != nil {
			return nil, err
		}

		product, err := s.getProductByID(bd.ProductID)
		if err != nil {
			return nil, err
		}

		bd.Product = product
		out = append(out, bd)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return out, nil
}
