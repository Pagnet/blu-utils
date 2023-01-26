<h1 align="center">
  Blu Utils
</h1>

<p align="center">
  <a href="https://github.com/Pagnet/blu-utils/actions">
    <img alt="Actions Status" src="https://github.com/Pagnet/blu-utils/workflows/CI/badge.svg">
  </a>
  <a href="https://github.com/Pagnet/blu-utils/blob/master/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/Pagnet/blu-utils">
  </a>
  <a href="https://github.com/Pagnet/blu-utils/graphs/commit-activity">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Pagnet/blu-utils">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="Prettier code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="http://makeapullrequest.com">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </a>
</p>

## Installation
```sh
yarn add @useblu/utils
```
or
```sh
npm i @useblu/utils
```
## Usage
### Javascript
```js
import { normalizeMoney, normalizeCpfOrCnpj } from "@useblu/utils";

console.log(normalizeMoney(150)); // R$ 150,00
console.log(normalizeCpfOrCnpj("93231097037")); // 932.310.970-37

```
## Contributing
Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of this project! :coração_azul: Read below to learn how you can take part of it.
### Code of Conduct
We adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.
### Contributing Guide
Read our [contributing guide](.github/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.
### Good First Issues
To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/Pagnet/blu-utils/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.
## License
All packages are licensed under the terms of the [GPL-3.0 License](LICENSE).
