FROM ruby:3.3

RUN apt-get update -qq && apt-get install -y postgresql-client sqlite3 curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install
COPY . /myapp

# Install npm dependencies
RUN npm install

# Build assets for production
RUN RAILS_ENV=production bin/vite build
RUN RAILS_ENV=production SECRET_KEY_BASE=dummy bin/rails assets:precompile

# Database setup (moved to entrypoint for production)
# RUN bin/rails db:create db:migrate

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0", "-e", "production"]
