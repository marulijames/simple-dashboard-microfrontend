# My Simple Dashboard

Simple dashboard application, built using single-spa framework for frontend microservice architecture implementation, React for building UI, and Webpack for module bundler.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need node and npm to run this project.

### Installing

1. Clone this project
2. Jump into each service folder and do:
   - `npm install`
   - `npm run watch:portal`
3. Then go to the master-template folder and do:
   - `npm install`
   - `npm run watch`
4. App is served at http://localhost:9000.

## Deployment

Make sure all of the url of loadApp() in master.js set according to the services deployed url. Use SystemJS to import store.js in helper.js file

## Built With

* [React](https://reactjs.org/) - The UI Framework
* [Single Spa](https://single-spa.js.org/) - Front-End Microservices Framework
* [Webpack](https://webpack.js.org/) - Module Bundler

## Author

**Maruli James Herbert** 

## License

This project is licensed under the MIT License.

## Acknowledgments

* [single-spa-portal-example] (https://github.com/me-12/single-spa-portal-example)


