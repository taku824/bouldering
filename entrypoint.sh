#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# Create database if it doesn't exist and run migrations in background
bin/rails db:create db:migrate &

# Start the Rails server
exec "$@"
