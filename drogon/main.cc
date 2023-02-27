#include <drogon/drogon.h>
using namespace drogon;

int main()
{
    // app().loadConfigJson("config.json");
    app().registerHandler(
        "/greet/{name}",
        [](const HttpRequestPtr &,
           std::function<void(const HttpResponsePtr &)> &&callback,
           const std::string &name) {
            auto resp = HttpResponse::newHttpResponse();
            resp->setBody("Hello " + name);
            callback(resp);
        },
        {Get});

    app().addListener("127.0.0.1", 3000).run();
}
