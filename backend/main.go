package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Printf("failed to load .env file")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	addr := ":" + port

	dbPath := os.Getenv("DATABASE_URL")
	store, err := OpenStore(dbPath)

	if err != nil {
		log.Fatalf("failed to open DB: %v", err)
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/api/health", HealthHandler)
	mux.HandleFunc("/api/products", store.GetAllProductsHandler)
	mux.HandleFunc("/api/products/{slug}", store.GetProductBySlugHandler)
	mux.HandleFunc("/api/products/{slug}/reviews", store.GetProductReviewsBySlugHandler)
	mux.HandleFunc("/api/bundles", store.GetBundlesHandler)

	log.Printf("Listening on %s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("server failed to start: %v", err)
	}
}
