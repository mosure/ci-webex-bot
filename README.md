# API Template

## [Express](https://github.com/expressjs/express)

This template uses `express` which has many examples and a lot of middlewares.

## [Inversify](https://github.com/inversify/InversifyJS)

This template uses `InversifyJS` for IoC and DI. See `./src/inversify.config.ts` for bindings and `./src/types.ts` for types.

### [inversify-express-utils](https://github.com/inversify/inversify-express-utils)

This template uses `inversify-express-utils` for express DI. An example controller can be found at `./src/controllers/example_controller.ts`. These controllers look very similar to `.NET Core MVC`

## Running Locally
`npm start`

`GET` on `http://localhost:3000`

## Tests
`npm test`

## Linting
`npm run pretest`

## Code Coverage
`npm run coverage`

Startup `Live Server` and navigate to `.coverage/lcov-report/index.html`.
