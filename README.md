# Related Products, a Front-end Demo
This is the **Related Products** component service demo for an athletic wear eCommerce web application. It is visually modeled after [Lulu Lemon's](lululemon.com) website and designed to be used with a reverse proxy that powers the main service-oriented application.

After following the [#Installation](#Installation) and [#Usage](#Usage) instructions below, you'll see:
- A component that displays four "related" (not actually related in the demo) products
- One or more style swatches when a product image is mouse-hovered
- A different (unrelated for the demo) image when a swatch is mouse-hovered
- Product names and prices, fetched via the Express server from the MySQL database

A few notes on functionality:
- Changing the Product ID in the URL to a different ID (from 1 to 100) will display a different set of products
- These products are consistent with the URL chosen; in other words, setting the Product ID back to '1' will render the same four original products
- If you'd like to wipe the database and generate an entirely new set of randomly generated products, run the 'reset-db' and 'seed' scripts from the [#Usage](#Usage) section below
- Check out [seed.js](database/seed.js) to view/alter the seeding procedure

## Technology
- Designed as a service for use in a [service-oriented](https://en.wikipedia.org/wiki/Service-oriented_architecture) application
- [React.js](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

## Requirements
- Node.js version 8.15.1 or newer
- MySQL version 5.7 or newer

## Installation
- Clone this repository with the **git clone** command

## Setup
- Make sure your MySQL server is running
- Edit the **reset-db** line of [package.json](package.json) and replace *root* with your preferred DB username
- Edit [config.js](database/config.js) to reflect your desired MySQL server username/password

## Usage
To set up, run the following from the root directory:
- `npm install` to install node dependencies
- `npm run reset-db` to set up the MySQL database and tables (this can also reset your database if you'd like to re-seed)
- `npm run seed` to seed the database with random data
- `npm run start` to run the express server
- `npm run react:dev` to generate the webpack bundle and watch for changes

Then navigate to `http://127.0.0.1:3003/1` to see the related-products app.

You can change the Product ID (the number after the base URL) to anything between 1 and 100 to see a new set of products.

For example: `http://127.0.0.1:3003/42`

## License
[MIT](https://choosealicense.com/licenses/mit/)