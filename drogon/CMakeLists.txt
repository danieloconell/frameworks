cmake_minimum_required(VERSION 3.5) # minimum version required for drogon

project(greeter CXX)

set(CMAKE_CXX_STANDARD 20)

set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_executable(${PROJECT_NAME} main.cc)

set(CMAKE_BUILD_TYPE Release)

# for clang lsp to find libraries
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(BUILD_CTL OFF)
set(BUILD_EXAMPLES OFF)
add_subdirectory(drogon)

target_link_libraries(${PROJECT_NAME} PRIVATE drogon)
