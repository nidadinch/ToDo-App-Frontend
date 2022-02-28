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

## Visuals
<img src="https://media.giphy.com/media/1dVaBaeKC4FgozwVpG/giphy.gif" width="600"  />


## Installation

```
yarn install
```

or

```
npm install
```

## Usage

To run project: 

```
yarn serve
```

To run unit tests: 

```
yarn run vue-cli-service test:unit
```

To run pact tests: 

```
yarn run vue-cli-service test:unit pacts/
```

To build: 

```
yarn build --mode test
```

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
  
