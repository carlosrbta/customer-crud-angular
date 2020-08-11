# Customer CRUD App

The challenge will be to develop a web application for registering customers of a car store, using Angular, with simple data management (CRUD) performing data management in localstorage.

## User Stories

- [ ] Customer list screen;
- [ ] Customer registration screen;
- [ ] Customer editing screen (can be the same screen used for registration);
- [ ] The possibility of removing a customer (through editing or the list itself);

## Customer registration must contain the following information:

- Name
- CPF
- Phone
- Birthday
- Address
- Car brand
- Car model

Car brand and model must start from a pre-defined list, powered by this API public: https://deividfortuna.github.io/fipe/

## Specifications expected from the project:

- [ ] The registration and editing forms must undergo validation;
- [ ] All fields specified above must be mandatory;
- [ ] Fields with known standards must have specific validation (eg, CPF, valid birthday);
- [ ] The implementation should contain automated unit and integration tests (e2e);
- [ ] It is allowed to use any library that helps to implement the challenge;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
