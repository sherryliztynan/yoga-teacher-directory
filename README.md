# Yoga Teacher Directory - UI

## About This Application

### Objective
The objective of this project was to create a CRUD REST API and UI for a yoga teacher directory. The UI would need to incorporate a form that could be used to add, edit, and delete teachers from the database.

### Structure & Functionality
This API utilizes a Node + Express backend and MySQL database to store the teacher information. The frontend is built with the React.js library.

The database contains a single table with 8 columns (id, name, city, instagram, specialty, createdAt, updatedAt, & deletedAt). The application uses the Sequelize ORM to connect to the database and it is then parsed into JSON format.



## API Documentation

The following HTTP methods are implemented: GET, POST, PUT, DELETE.

#### GET METHOD

http://localhost:3002/api/teachers

GET - Returns a list in raw JSON of all of the teachers and their information currently in the database.

    {
        "id": 1,
        "name": "Brytta",
        "city": "Lisbon",
        "instagram": "xanaduyoga",
        "specialty": "Vinyasa",
        "createdAt": "2021-09-28T17:23:44.000Z",
        "updatedAt": "2021-09-28T17:23:44.000Z",
        "deletedAt": null
    },

#### POST METHOD

http://localhost:3002/api/teachers

POST - Adds a new teacher to the database. A new Teacher ID is created in sequential order.

    {
        "id": 1,
        "name": "Brytta",
        "city": "Lisbon",
        "instagram": "xanaduyoga",
        "specialty": "Vinyasa",
        "createdAt": "2021-09-28T17:23:44.000Z",
        "updatedAt": "2021-09-28T17:23:44.000Z",
        "deletedAt": null
    },

#### PUT METHOD

http://localhost:3002/api/teachers/:identifier

PUT - Updates a student currently in the databse based on the Student ID # being used as the param.

The only property that is being updated currently is the city.

         {
        "id": 1,
        "name": "Brytta",
        "city": "New York City",
        "instagram": "xanaduyoga",
        "specialty": "Vinyasa",
        "createdAt": "2021-09-28T17:23:44.000Z",
        "updatedAt": "2021-09-28T17:23:44.000Z",
        "deletedAt": null
    },

#### DELETE METHOD

http://localhost:30002/api/teachers/:identifier

DELETE - Deletes a teacher currently in the database by Teacher ID # (which is the param). 

## To View the Front End Locally

http://localhost:3000/