package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
)

func RequestAuth(w http.ResponseWriter, r *http.Request) {
	oauthURL := fmt.Sprintf(
		"https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=user:email",
		os.Getenv("GITHUB_CLIENT_ID"),
		os.Getenv("GITHUB_OAUTH_REDIRECT_URI"),
	)
	data, err := json.Marshal(
		map[string]string{
			"url": oauthURL,
		},
	)
	if err != nil {
		log.Println("Error while handling auth:", err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.Write(data)
	return
}

func main() {
	godotenv.Load()
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/home", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello\n"))
		return
	})
	r.Route("/auth", func(r chi.Router) {
		r.Get("/request", RequestAuth)
	})

	server := http.Server{
		Addr:    ":8080",
		Handler: r,
	}
	log.Println("Starting server on port 8080")
	if err := server.ListenAndServe(); err != nil {
		panic(err)
	}
}
