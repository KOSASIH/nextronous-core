#!/bin/bash

# Set environment variables
export NEXTRONOUS_CORE_VERSION=$(git describe --tags --always)
export NEXTRONOUS_CORE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
export NEXTRONOUS_CORE_COMMIT=$(git rev-parse HEAD)

# Run unit tests
echo "Running unit tests..."
jest

# Run integration tests
echo "Running integration tests..."
docker-compose -f docker-compose.test.yml up -d
docker-compose -f docker-compose.test.yml exec nextronous-core npm run test:integration
docker-compose -f docker-compose.test.yml down

# Run end-to-end tests
echo "Running end-to-end tests..."
docker-compose -f docker-compose.test.yml up -d
docker-compose -f docker-compose.test.yml exec nextronous-core npm run test:e2e
docker-compose -f docker-compose.test.yml down
