## Description

Nest-based microservice with sqlite database.

Reads "tweets" in database every 5 seconds.
Takes action when 10 new tweets are found (pagination value is cached).


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
