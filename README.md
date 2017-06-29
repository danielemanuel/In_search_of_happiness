# In Search of Happiness

![a-screenshot-of-the-app-homepage](http://i.imgur.com/NpUoZOy.png)

A single page web app to help developers find their dream company to work for. 

## To use

Visit the site on Heroku [here](http://in-search-of-happiness.herokuapp.com/).

## To run locally

### On OSX: 
You will need [MongoDB](https://www.mongodb.com/), [npm](https://docs.npmjs.com/getting-started/installing-node), the [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), and [Selenium Standalone Server](http://www.seleniumhq.org/download/) installed to start.

```bash
git clone https://github.com/danielemanuel/in_search_of_happiness
cd in_search_of_happiness
npm install
cd react-ui
npm install
```

If you have Homebrew installed, we provide a convenience script to install and set up Mongo and Selenium as background processes: `npm run setup`.

You can seed your database using the Glassdoor API with `npm run db-download`.

Once everything is installed, run `npm run start-servers` from the project root to host the project locally.

## To run tests
* Everything: `npm test`
* Front End: `npm run test-frontend`
* Back End: `npm run test-backend`

Note that our front end tests rely on the project servers, so use `npm run start-servers` before running them.

## The App

- Node API server with Express on backend.
- React server on the front end that compiles to static files for production.
- Heroku for site hosting.
- mLab for storing production db in the cloud.

## Our tech stack

### Framework:
* [MongoDB](https://www.mongodb.com/)
* [Express](http://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Node](https://nodejs.org/en/)

### Graphics:

* [D3 and D3-Force](https://d3js.org/)
* [Chart.js](http://www.chartjs.org/)
* [Bootstrap](http://getbootstrap.com/)

### Other:

* [React Router DOM](https://reacttraining.com/react-router/web/guides/philosophy)
* [Mongoose](http://mongoosejs.com/)

### Test harness:

#### Back End

* [Zombie](http://zombie.js.org/)
* [Jasmine](https://jasmine.github.io/)

#### Front End

* [Selenium Standalone Server](http://www.seleniumhq.org/download/)
* [Webdriver.io](http://webdriver.io/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)

## Contributors:

* [Sam Blausten](https://github.com/sblausten)
* [Chris Mitchell](https://github.com/chrisjmit)
* [Alexander Chalk](https://github.com/adc17)
* [Daniel Costea](https://github.com/danielemanuel/)