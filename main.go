package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/lib/pq"
)

type response struct {
	Status string `json:"status"`
}

type product struct {
	ID         int       `json:"id"`
	Sku        string    `json:"sku"`
	Name       string    `json:"name"`
	Category   string    `json:"category"`
	PriceCents int64     `json:"price_cents"`
	Stock      int       `json:"stock"`
	CreatedAt  time.Time `json:"created_at"`
}

func HealthHandler(w http.ResponseWriter, r *http.Request) {
	response := response{Status: "ok"}
	writeJSON(w, response)
}

func GetAllProducts() ([]product, error) {
	dbPath := os.Getenv("DATABASE_URL")
	db, err := sql.Open("postgres", dbPath)
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}

	rows, err := db.Query("SELECT * FROM products;")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var out []product
	for rows.Next() {
		var p product
		if err := rows.Scan(&p.ID, &p.Sku, &p.Name, &p.Category, &p.PriceCents, &p.Stock, &p.CreatedAt); err != nil {
			return nil, err
		}

		out = append(out, p)
	}
	return out, rows.Err()
}

func ProductsHandler(w http.ResponseWriter, r *http.Request) {
	products, err := GetAllProducts()
	if err != nil {
		log.Printf("failed to retrieve product's list: %v", err)
	}

	writeJSON(w, products)
}

func writeJSON(w http.ResponseWriter, response any) {
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		log.Printf("encode error: %v", err)
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	addr := ":" + port

	http.HandleFunc("/api/health", HealthHandler)
	http.HandleFunc("/api/products", ProductsHandler)

	log.Printf("Listening on %s", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("server failed to start: %v", err)
	}
}
