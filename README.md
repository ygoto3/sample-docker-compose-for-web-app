# sample-docker-compose-for-web-app
A sample Docker Compose for a Web application

## Run containers

Create a new rails project.

```
$ rails new -J --skip-bundle -T -d mysql rails
```

Change `gem 'mysql2'` to `gem 'mysql2', '~> 0.3.18'` in rails/Gemfile.

Add `host: mysqld` to database.yml in rails/config.

```
default: &default
  adapter: mysql2
  encoding: utf8
  pool: 5
  username: root
  password: password
  host: mysqld
```

Get the docker containers up.

```
$ docker-compose up -d
```

Create database.

```
$ docker-compose run rails rake db:create
```

Migrate it.

```
$ docker-compose run rails rake db:migrate
```
