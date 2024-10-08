#!/bin/bash

# Set environment variables
export NEXTRONOUS_CORE_VERSION=$(git describe --tags --always)
export NEXTRONOUS_CORE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
export NEXTRONOUS_CORE_COMMIT=$(git rev-parse HEAD)

# Build the project
./build.sh

# Deploy to production
echo "Deploying to production..."
docker-compose -f docker-compose.prod.yml up -d

# Verify deployment
echo "Verifying deployment..."
docker-compose -f docker-compose.prod.yml exec nextronous-core curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/healthcheck

if [ $? -eq 200 ]; then
  echo "Deployment successful!"
else
  echo "Deployment failed!"
  exit 1
fi
