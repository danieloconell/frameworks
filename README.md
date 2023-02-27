# Framework Benchmarks

# Projects
Each project creates a simple REST API that has one endpoint: `/greet/<name>`. The server responds to each request with `Hello <name>`.

# Results
| Framework         | Request/Sec   | Transfer/Sec |
|:------------------|--------------:| ------------:|
| Node.js + Express | 19247.90      | 4.35MB       |
| Deno + Oak        | 46328.03      | 6.63MB       |
| Bun + Boa.js      | 84807.32      | 10.19MB      |
| Node + Next.js    | 9720.59       | 22.59MB      |
| Node + Fastify    | 54736.69      | 9.14MB       |
| Flask             | 438.93        | 78.44KB      |
| FastAPI           | 10216.69      | 1.33MB       |

All tests performed on 2020 M1 Macbook pro using [`wrk`](https://github.com/wg/wrk) with this command:
```bash
wrk -t8 -c400 -d30s http://127.0.0.1:3000/greet/mark
```
