
# Hockey Pool Generator - API


Node backend API to provide services to the Hockey Pool Generator web application. Used as a proxy between the [frontend](https://github.com/lmicho/hockey-pool-generator-frontend) and [My Sports Feed API](https://www.mysportsfeeds.com/).

---

## Index

- [Stack](#stack)
- [Design Goals](#design-goals)
- [API](#api)
- [Getting Started](#getting-started)
- [Local Commands](#local-commands)
    - [Development](#development)
- [Contributing](#contributing)
- [Rules](#rules)
- [Have a question or suggestion?](#have-a-question-or-suggestion)
- [License](#license)

---


## Stack

* [Node.js](https://nodejs.org) (8.11.3)
* [npm](https://www.npmjs.com) (6.4.1)
* [My Sports Feed API](https://www.mysportsfeeds.com/) (2.0)
* [Standard JS](https://standardjs.com/) (12.0.1) to maintain a consistent code style

---

## Design Goals

- Use Cutting-Edge Technologies
- Best Programming Techniques
- Focus on application maintenability and code readability
- Fast testing with [Karma](https://karma-runner.github.io/latest/index.html) and [Jasmine](https://jasmine.github.io/)

---

## API

This application consumes data from the following services:

* [My Sports Feed API](https://www.mysportsfeeds.com/) (2.0)

---

## Getting Started

### Install NVM (Node Version Manager)
We use NVM to manage our Node verions to keep a consistent environment across developers.

[Follow install instructions here](https://github.com/creationix/nvm#install-script)

After the install, `cd` into the `hockey-pool-generator-frontend` directory and run `nvm use`. This will use the Node version defined in the `.nvm` file.

### Install yarn to a better package management

```sh
$ npm install --global yarn
```

Install application dependencies

```sh
$ yarn install
```

---

## Local Commands

In this current section you can find all commands to run the application in your machine. All the commands also are  in the `scripts` section of [package.json](package.json).

### Development

```sh
$ npm run dev
```

---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Rules
### Branch naming convention:
- For a feature : `features/{Trello-story-number}`
- For a bug : `bugs/{Trello-story-number}`
- For a hotfix : `hotfix/{Trello-story-number}`
- Example: features/HOC-01

### Commit messages should always start with: 
- `{Trello-story-number}`
- This gives us a quick reference point between our Git history and Trello
- Example: HOC-01: short description

### Feature branch history and merge : 
- Always keep your feature branch up to date with whatever base branch you've stemmed from.
- Merge the base branch into your feature branch at least once daily.

---

## Contributors

* Paxton Eicher ([pxtnpxtn](https://github.com/pxtnpxtn))
* Lauriane Michaud ([lmicho](https://github.com/lmicho))


---

## Have a question or suggestion?
Contact [Paxton](https://www.linkedin.com/in/paxton-eicher/) or [Lauriane](https://www.linkedin.com/in/laurianemichaud/) on LinkedIn, send us an email to jpaxton.w.eicher@gmail.com and  lauriane.b.michaud@gmail.com, or create a pull request on this project.


---


## License

This project is licensed under the terms of the **The MIT License** license.
>You can check out the full license [here](https://opensource.org/licenses/MIT)

---