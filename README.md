# Framework Benchmarks
> A worse version of [techempower](https://www.techempower.com/benchmarks/)

## Projects
Each project creates a simple REST API that has one endpoint: `/greet/<name>`. The server responds to each request with `Hello <name>`.

## Results[^note]
| Framework         | Request/Sec   | Transfer/Sec | Codebase Size | Executable Size |
|:------------------|--------------:| ------------:| -------------:| ---------------:|
| Fiber             | 148105.21     | 17.94MB      | 24K           | 8.4M            |
| Gin               | 129058.80     | 15.63MB      | 20K           | 9.6M            |
| Drogon            | 123208.46     | 17.39MB      | 39M           | 2.5M            |
| Actix             | 109199.35     | 13.33MB      | 1.0G          | 4.7M            |
| Bun + Boa.js      | 84807.32      | 10.19MB      | 2.4M          | NA              |
| Node + Fastify    | 64597.12      | 10.78MB      | 11M           | NA              |
| Deno + Oak        | 46328.03      | 6.63MB       | 8.0K          | 84M             |
| PyPy + FastAPI    | 19455.73      | 2.54MB       | 33M           | NA              |
| Node.js + Express | 19247.90      | 4.35MB       | 3.0M          | NA              |
| Node + Next.js    | 16849.72      | 2.43MB       | 271M          | NA              |
| CPython + FastAPI | 10216.69      | 1.33MB       | 33M           | NA              |
| CPython + Flask   | 489.49        | 87.48KB      | 25M           | NA              |
| PyPy + Flask      | 444.52        | 79.44KB      | 25M           | NA              |

[^note]:
  All tests performed on a 2020 M1 Macbook Pro using [`wrk`](https://github.com/wg/wrk):
  ```bash
  wrk -t8 -c400 -d30s http://127.0.0.1:3000/greet/mark
  ```
