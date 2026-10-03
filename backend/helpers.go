package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func HealthHandler(w http.ResponseWriter, r *http.Request) {
	var response struct {
		status string
	}
	response.status = "ok"
	writeJSON(w, response)
}


// ---------------- helper functions -------------------

func writeJSON(w http.ResponseWriter, response any) {
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		log.Printf("encode error: %v", err)
	}
}
