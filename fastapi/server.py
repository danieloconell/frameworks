import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/greet/{name}")
async def greet(name: str):
    return f"Hello {name}"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000, log_level="critical")
