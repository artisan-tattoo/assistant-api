# Artisan Tattoo Assistant - API

## Prerequisites

Artisan Assistant API is an application built in [Node JS](https://nodejs.org/) using the [Endpoints framework](https://github.com/endpoints). 

To run this app, please install [Node](https://nodejs.org/download/). 

This application is configured to be backed by a [`PostgreSQL`](http://www.postgresql.org/) database. You can install this, [here](http://www.postgresql.org/download/).

If you would like to change the database this application uses, update the [`knexfile`](https://github.com/artisan-tattoo/assistant-API-endpoints/blob/master/knexfile.js). NOTE: You may also need to update the types in the [migrations](https://github.com/artisan-tattoo/assistant-API-endpoints/tree/master/migrations).

## Up and Running

```
$ git clone git@github.com:artisan-tattoo/assistant-API-endpoints.git
$ cd assistant-API-endpoints
$ npm install
$ knex migrate:latest
$ npm start
```

Navigate to [`http://localhost:8080`](http://localhost:8080).

## Scripts

Artisan Assitant API uses [`npm` scripts](https://docs.npmjs.com/misc/scripts) to automate tasks. The tasks available are:

- `npm start`: runs `node index`, starts a server at `localhost:8080`
- `npm run lint`: lints the javascript given options determined in `.jshintrc`
