# jest-training

[![Build Status](https://travis-ci.org/roxana-oprea/jest-training.svg?branch=master)](https://travis-ci.org/roxana-oprea/jest-training)

Learn Jest and unit testing through code challenges - each test represents a challenge. The challenges are taken from various sources.

The project is by default configured to:

- format files with Prettier (through vscode workspace configuration)
- check files with eslint (through vscode workspace configuration)
- automatically save and format files on editor focus change (through vscode workspace configuration)
- run tests with Jest

## Development

Put your test suites under `__tests__` directory and run `npm test`. If you want Jest to continuousely run the tests then run `npm run watch` command. Please note that tests must be written in Typescript.

## Continuous Integration

Continuous Integration configuration has been provided for Travis (.travis.yml), AppVeyor (appveyor.yml) and Bitbucket (bitbucket-pipelines.yml). Please refer to their documentation site for how to configure them.

## License

MIT © Oprea Roxana
