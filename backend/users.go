package main

import "time"

type User struct {
	ID        int64     `json:"id"`
	Username  string    `json:"username"`
	Password  string    `json:"password"`
	CreatedAt time.Time `json:"created_at"`
}

// --------------------------- Repositories ---------------------------

func (s *Store) GetUsernameByID(id int64) (*string, error) {
	var username string
	err := s.db.QueryRow(`
		SELECT
			username
		FROM users
		WHERE id = $1;
	`, id).Scan(&username)

	if err != nil {
		return nil, err
	}

	return &username, nil
}
