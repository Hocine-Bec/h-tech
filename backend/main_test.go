package main

// import (
// 	"encoding/json"
// 	"net/http"
// 	"net/http/httptest"
// 	"testing"
// )

// func TestGETHealth(t *testing.T) {
// 	req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
// 	rr := httptest.NewRecorder()

// 	HealthHandler(rr, req)

// 	if rr.Code != http.StatusOK {
// 		t.Fatalf("got %d, want %d", rr.Code, http.StatusOK)
// 	}

// 	if got := rr.Header().Get("Content-Type"); got != "application/json" {
// 		t.Fatalf("expected application/json, got %q", got)
// 	}

// 	var res response

// 	if err := json.NewDecoder(rr.Body).Decode(&res); err != nil {
// 		t.Fatalf("failed to decode JSON: %v", err)
// 	}
	
// 	if res.Status != "ok" {
// 		t.Errorf("expected status 'ok', got %q", res.Status)
// 	}
// }
