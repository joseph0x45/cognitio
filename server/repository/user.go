package repository

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	"github.com/joseph0x45/cognitio/models"
)

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{
		db: db,
	}
}

func (r *UserRepository) Insert(user *models.User) error {
	const query = `
    insert into users(
      id, username, password, email,
      profile_picture, user_type
    )
    values (
      :id, :username, :password, :email,
      :profile_picture, :user_type
    )
  `
	_, err := r.db.NamedExec(query, user)
	if err != nil {
		return fmt.Errorf("Error while inserting user: %w", err)
	}
	return nil
}

func (r *UserRepository) GetAll() ([]models.User, error) {
	const query = "select * from users"
	data := make([]models.User, 0)
	err := r.db.Select(&data, query)
	if err != nil {
		return nil, fmt.Errorf("Error while getting all users: %w", err)
	}
	return data, nil
}

func (r *UserRepository) GetByID(id string) (*models.User, error) {
	const query = "select * from users where id=$1"
	user := &models.User{}
	err := r.db.Get(user, query)
	if err != nil {
		return nil, fmt.Errorf("Error while getting user by ID: %w", err)
	}
	return user, nil
}
