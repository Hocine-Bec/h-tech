package main

import (
	"context"
	"database/sql"
	"fmt"
)

// --------- Types ---------

type Store struct {
	db *sql.DB
}

// --------- Functions ---------

func OpenStore(dbPath string) (*Store, error) {
	db, err := sql.Open("postgres", dbPath)
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}

	if err := db.PingContext(context.Background()); err != nil {
		db.Close()
		return nil, fmt.Errorf("ping db: %w", err)
	}

	return &Store{db: db}, nil
}
