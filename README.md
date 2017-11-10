[![Build Status](https://travis-ci.org/etherpass/etherpass-ui.svg?branch=master)](https://travis-ci.org/etherpass/etherpass-ui)
# Etherpass UI
Etherpass all-in-one web and desktop application.

## Getting started

### Prerequisites
- Vagrant
- VirtualBox

### Setting up VM for development
```bash
$ vagrant up
$ vagrant ssh
```

### NPM workflow:
- `npm install`
- `npm start`

Visit http://localhost:5577/

### [Yarn](yarnpkg.com) workflow:
*NOTE: yarn package manager is not installed in the dev VM - this option implies you are running the application on your guest machine*

- `yarn`
- `yarn start`
