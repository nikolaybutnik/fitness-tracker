# Fitness Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A web application that allows the user to track their workouts and provides visual feedback in form of charts.

[Link to application](https://afternoon-oasis-31654.herokuapp.com/)

![Fitness Tracker Screenshot](https://github.com/nikolaybutnik/fitness-tracker/blob/main/public/assets/img/fitness-tracker-screenshot.png?raw=true)

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation

To install the application locally, run `npm install` to install all dependencies required to run it. Optionally, run the seed script with `npm run seed` command to insert dummy data into the database.

## Usage

To start the application locally, run `node server.js` or `npm run start` from the CLI. [The app is also hosted on Heroku.](https://afternoon-oasis-31654.herokuapp.com/)
This application uses MongoDB to keep track of a user's workouts on given dates. When a new workout is created, it is created for the current day. Performing more workouts will add them to the current day, and the overall data totals will be calculated and displayed on the home screen. Navigating to the dashboard will show the user their workout data in chart form, allowing sorting by specific exercises.

## License

This project is covered under the MIT license. To find out what is permitted under this license, click the license badge at the top of the README.

## Contributing

Feel free to submit any pull requests. All pull requests will be considered.

## Tests

No tests are currently written for this application.

## Questions

You may directly send any questions related to this project or any of my other projects to [my email adress](mailto:btnk.nik@gmail.com). To find all my projects visit [my GitHub profile](https://github.com/nikolaybutnik).
