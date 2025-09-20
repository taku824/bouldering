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

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000 3035

CMD ["sh", "-c", "npm run dev & rails server -b 0.0.0.0"]
