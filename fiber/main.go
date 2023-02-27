package main

import (
  "fmt"

  "github.com/gofiber/fiber/v2"
)

func main() {
  app := fiber.New()

  app.Get("/greet/:name", func(c *fiber.Ctx) error {
    msg := fmt.Sprintf("hello %s", c.Params("name"))
    return c.SendString(msg)
  })

  app.Listen(":3000")
}
