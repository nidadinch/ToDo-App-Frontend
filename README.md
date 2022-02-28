# To-Do App FrontEnd

This repository belongs to a To-Do App based on Vue.js. All project written by A-TDD approach.For more information about ATDD please check : https://bit.ly/3JmLA82. It has only one feature and  adds a new todo item to list. Live version can be found in: http://34.111.105.21 

Acceptance criteria for project:

```gherkin
Feature: ToDo
  Scenario: Add Item to List
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list
```

## Table of contents

- [Visuals](#visuals)
- [Project Tree](#project-tree)
- [Installation](#installation)
    - [Install dependencies](#install-dependencies)
    - [Run project](#run-project)
    - [Run unit tests](#run-unit-tests)  
    - [Run pact tests](#run-pact-tests)
    - [Build](#build)
- [Dependencies](#dependencies)
- [Pipeline](#pipeline)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Visuals

<img src="https://media.giphy.com/media/1dVaBaeKC4FgozwVpG/giphy.gif" width="600"  />

## Project Tree 

```
├── pact/
├── public/
├── tests/unit/pacts
│   └─ items.spec.js
├── src/
│   ├── assets/
│   ├── components/
│   │ ├── __tests__
│   │ │   ├── List.spec.js
│   │ │   └── ListItem.spec.js
│   │ ├── ListItem.vue
│   │ └── List.vue 
│   ├── router/
│   ├── store/
│   ├── views/
│   │ ├── Home.vue
│   │ └── __tests__
│   │     └── Home.spec.js
    ├── api.js
│   └── ...
├── package.json
└── ...
```

## Installation

### Install Dependencies

```
yarn install
```

or

```
npm install
```

### Run project

```
yarn serve
```

### Run unit tests

```
yarn run vue-cli-service test:unit
```

### Run pact tests

```
yarn run vue-cli-service test:unit pacts/
```

### Build

```
yarn build --mode test
```

## Dependencies

All dependencies can be found on package.json file. Also you can check the list:

- [Axios](https://github.com/axios/axios)
- [Vue](https://vuejs.org/guide/introduction.html)
- [Vuex](https://vuex.vuejs.org) 
- [Pact.js](https://github.com/pact-foundation/pact-js) 
- [Jest](https://jestjs.io/docs/getting-started)
- [Vue Router](https://router.vuejs.org/guide/) 

## Pipeline

![Project-pipeline](/uploads/659238f8524dfd1a4ba70ec8b8783bac/Adsız-2022-02-28-2121.png)

Project has GitLab CI pipeline and it has several steps to get ready for deployment. 
- Build & Test: Builds the project and runs all unit tests,
- Dockerize: Generates a docker image to private gitlab registry
- Deploy2Test: Configures Google Cloud Platform Kubernetes Engine. This step has 4 another configuration files named: 
  frontend-deployment.yaml
  frontend-ingress.yaml
  frontend-secret.yaml
  frontend-service.yaml
For more information please check .gitlab-ci.yml file.
Ingress has been used for assign a static ip to frontend. 

This project contains a docker file that generates a docker image. For more information please check Dockerfile.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Nida Dinç - niddinc@gmail.com
  

  
