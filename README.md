# Simple Dashboard Microfrontend

Simple dashboard application, built using Single Spa framework for frontend microservice architecture implementation, React for building UI, and Webpack for module bundler.

## App Link

https://xendit-test-james.herokuapp.com

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

First deploy each microfrontend service (project in all folder) individually.<br/> 
- Make sure all of the url of loadApp() in master-template/src/master.js set according to the deployed services url. 
- In master-template/src/helper.js use runScript() function instead of SystemJS.import() to import store.js .

## Built With

* [React](https://reactjs.org/) - UI Framework
* [Single Spa](https://single-spa.js.org/) - Front-End Microservices Framework
* [Webpack](https://webpack.js.org/) - Module Bundler

## Author

**Maruli James Herbert** 

## License

This project is licensed under the MIT License.

## Acknowledgments

* [single-spa-portal-example](https://github.com/me-12/single-spa-portal-example)


