# In Search of Happiness

A single page web app to help developers find their dream company to work for. 

## To use

Visit http://in-search-of-happiness.herokuapp.com/

## To run locally

### On OSX: 
You will need [Homebrew](https://brew.sh/), [npm](https://docs.npmjs.com/getting-started/installing-node) and the [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) installed to start.

You will need at least 

```bash
git clone https://github.com/danielemanuel/in_search_of_happiness
cd in_search_of_happiness
npm install
npm run setup-db
npm run start-servers
```

## To run tests

If starting from scratch: 

```bash
git clone https://github.com/danielemanuel/in_search_of_happiness
cd in_search_of_happiness
npm install
npm run setup-db
npm run start-servers
npm test
```

If you've already done local setup to view the app but have stopped all the servers:

```bash
brew services run mongodb
npm run start-servers
npm test
```

## Our tech stack

### Test harness

#### Backend: 
Jasmine, Zombie

#### Frontend / Feature tests:
Webdriver.io, Mocha, Chai

### The App
- Node API server with Express on backend
- React server on the front end
- Heroku for production

