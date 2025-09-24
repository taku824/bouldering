#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# Create database if it doesn't exist and run migrations
bin/rails db:create db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
