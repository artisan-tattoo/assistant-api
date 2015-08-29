# Artisan Tattoo Assistant - API

[![travis-status](https://travis-ci.org/artisan-tattoo/assistant-api.svg)](https://travis-ci.org/artisan-tattoo/assistant-api)
[![code-climate](https://d3s6mut3hikguw.cloudfront.net/github/artisan-tattoo/assistant-api/badges/gpa.svg)](https://codeclimate.com/github/artisan-tattoo/assistant-api)
[![dependencies](https://david-dm.org/artisan-tattoo/assistant-api.svg)](https://david-dm.org/artisan-tattoo/assistant-api)

## Prerequisites

#### NodeJS
Artisan Assistant API is an application built in [Node JS](https://nodejs.org/) using the [Endpoints framework](https://github.com/endpoints). 

To run this app, please install [Node](https://nodejs.org/download/). 

#### Databases
This application is configured to be backed by a [`PostgreSQL`](http://www.postgresql.org/) database in production and [`SQLite`](https://www.sqlite.org/) in development. To use PostgreSQL locally, you will need to [install it](http://www.postgresql.org/download/).

If you would like to change the database this application uses, update the [`knexfile`](https://github.com/artisan-tattoo/assistant-API-endpoints/blob/master/knexfile.js). NOTE: You may also need to update the types in the [migrations](https://github.com/artisan-tattoo/assistant-API-endpoints/tree/master/migrations).

#### Knex CLI
This application uses the [Knex command line tool](http://knexjs.org/#Migrations-CLI) to run migrations and seed the database. You will need to install it globally:

```
$ npm install knex -g
```

## Up and Running

```
$ git clone git@github.com:artisan-tattoo/assistant-api.git
$ cd assistant-api
$ npm install
$ npm run db:setup
$ npm start
```

Navigate to [`http://localhost:8080`](http://localhost:8080).

## Scripts

Artisan Assitant API uses [`npm` scripts](https://docs.npmjs.com/misc/scripts) to automate tasks. The tasks available are:

- `npm start`: runs `node index`, starts a server at `localhost:8080`
- `npm run db:setup`: creates db, runs migrations and seeds
- `npm run db:reset`: drops db, then runs `db:setup`
- `npm run lint`: lints the javascript given options determined in `.jshintrc`
- `npm run test:build`: builds tests using the tyr test suite
- `npm run test`: runs tests
