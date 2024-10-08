#!/bin/bash

# Set environment variables
export NEXTRONOUS_CORE_VERSION=$(git describe --tags --always)
export NEXTRONOUS_CORE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
export NEXTRONOUS_CORE_COMMIT=$(git rev-parse HEAD)

# Build the Docker image
echo "Building Docker image..."
docker build -t nextronous-core:latest .

# Push the Docker image to the registry
echo "Pushing Docker image to registry..."
docker tag nextronous-core:latest nextronous-core:$NEXTRONOUS_CORE_VERSION
docker push nextronous-core:$NEXTRONOUS_CORE_VERSION
