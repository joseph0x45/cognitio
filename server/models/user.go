package models

type User struct {
	ID             string `json:"id" db:"id"`
	Username       string `json:"username" db:"username"`
	Password       string `json:"password" db:"password"`
	Email          string `json:"email" db:"email"`
	ProfilePicture string `json:"profile_picture" db:"profile_picture"`
	UserType       string `json:"user_type" db:"user_type"`
}
