# Sequelize with Relations Demo

## About this app:

To start using this app, run `npm install` from the project's root directory. Then you can test out all the routes on this application using the provided comments, after you start the server by typing `node server.js` in the console at the root directory of this project. I recommend using Postman to test these routes.

## About the code:

If you want to recreate this project from scratch, here's what you'll need to know:

1. Initialize npm in your project using `npm init`
2. Get Sequelize and sequelize-cli in your project using `npm install sequelize sequelize-cli`
3. Initialize Sequelize in your project by typing `npx sequelize init` (note: npx, not npm)
4. Create models for your database, following the examples I used in this project
5. If you're using Express for your server, you can follow all the examples in routes folder and server.js file in this project
6. Make sure to edit your config.json file in `/config/config.json` so that the "development" section points towards your SQL database (username, password, and database name)
