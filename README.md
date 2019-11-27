# Mediasmart's coding test

Coding test made for mediasmart and has two parts:

- Back end:

  - Creates a server with node and express.
  - It fetches an endpoint (protected with a password) with the database of the company's employees.

- Front end:

  - Connected with the backend side of the app. It renders the endpoint's data (image, name and age).
  - If you click on an employee's card, you can see another page with more info.
  - It is adapted to all devices (responsive web).
  - You can filter the employee you are looking for and it will be displayed on the homepage.

This project is made with React and Node. Interface development is easier using Sass preprocessor and structuring classes with BEM methodology.

## How to run this app

1. Clone this respository into your local machine: `git clone https://github.com/saramarin23/coding-test.git`.
2. `cd` into server folder and:

   - Install the dependencies: `npm install`
   - Create an .env file in the server's root folder with the following text:

   ```
   PORT = 5000
   ENDPOINT = http://work.mediasmart.io/
   PASSWORD = mediasmart2019
   ```

   - Run `nodemon index.js`. Server should be running on `http://localhost:5000`.
     It will reload everytime you make a change in the code.

3. Open another tab in your terminal and `cd` into the client folder. There, run `npm start`. Client should be running on `http://localhost:3000`.
   It will reload everytime you make a change in the code.
