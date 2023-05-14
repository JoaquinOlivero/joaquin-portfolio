package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./out")))
	log.Println("Listening on port 3000")
	http.ListenAndServe(":3000", nil)
}
