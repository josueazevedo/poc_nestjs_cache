**Project POC Nestjs Cache Redis/Cache-Manager**

---

## Objective:

The primary objective of this Proof of Concept (POC) project is to explore and compare different caching strategies within a NestJS application. Specifically, we aim to investigate three distinct approaches for implementing caching within NestJS:

1. Utilizing the `cache-manager` package.
2. Employing the `cache-manager-redis-store` package for Redis-based caching.
3. Implementing caching with the `redisio` package directly.

This POC seeks to provide insights into the ease of implementation of each caching strategy within a NestJS application environment.

---

## Setup:

Before running the POC, ensure you have Node.js and Docker installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/josueazevedo/poc_nestjs_cache
   ```

2. Navigate to the project directory:

   ```bash
   cd poc_nestjs_cache
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Provision container with Redis:

   ```bash
   docker compose up -d
   ```

5. Run the application:

   ```bash
   npm start:dev
   ```

---

## Caching Approaches:

### 1. Using `cache-manager` Package:

The `cache-manager` package provides a simple yet effective caching solution with support for various storage backends. In this approach, we'll utilize `cache-manager` to implement caching within our NestJS application.

### 2. Employing `cache-manager-redis-store` Package:

The `cache-manager-redis-store` package extends the functionality of `cache-manager` by providing Redis as a caching store. This approach leverages the speed and efficiency of Redis for caching within the NestJS application.

### 3. Implementing Caching with `redisio` Package:

For a more direct approach, we'll explore using the `redisio` package to interact directly with Redis for caching purposes. This approach provides fine-grained control over caching operations and may offer additional flexibility in certain scenarios.

---
