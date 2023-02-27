package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  gin.SetMode(gin.ReleaseMode)
  r := gin.New()
  r.GET("/greet/:name", func(c *gin.Context) {
    name := c.Param("name")
    c.String(http.StatusOK, "Hello %s", name)
  })
  r.Run("0.0.0.0:3000") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
