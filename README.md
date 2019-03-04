# mealOderingApp
Meal App challenge The mealapp implementation for the ALCwithForloop workshop

Made With
UI
* HTML for writing the webpage
* CSS for styling
* Javascript to add some behaviour

API
* Nodejs for server-side logic
* Babel for transpiling
* Express for api routes implementation
* Heroku for hosting services
* PostgreSql for the App database

Structure of the backend
*The API folder holds the backend code

*The config folder holds the postgress connection configuration

*The models folder holds the models to be use in the project

*The controller file holds the code for handling requests 

*The routes folder holds the files for the routes

*The tests folder holds the files for integrated tests

*The utils folder holds helper functions often reused accross the app such as the
response transformer function.

*The migrations folder holds the migration history to the database

*The build folder contains all the transpiled code done with babel

*The seeders folder contains sample data used to seed the database

Continuous Integration
* Travis CI & Codeclimate for test automation
* Coveralls for test coverage report

Test-Driven Development
* Mocha, Chai and Supertest for api route testing

Available APIs

GET	/api/v1/	Welcomes users to the application

POST	/api/v1/auth/signup	Registers a new user on the app

POST	/api/v1/auth/login	Logs in a registered user

POST	/api/v1/meal	Allows admin to create a meal

PUT	/api/v1/meal/:id	Allows admin to update a specific meals

DELETE	/api/v1/meal/:id	Allows an admin to delete a specific meal

PATCH	/api/v1/menu/:id	Allows an add a meal to the day's menu

GET	/api/v1/menu	Allows a user to get the current menu

DELETE	/api/v1/menu	Allows the admin to remove an item from the day's menu

POST	/api/v1/order	Allows a user to creat a meal order

PUT	/api/v1/meal/:id	Allows admin/user to update a specific meal order

GET	/api/v1/order	Allows admin/user to get their respective meal orders

License and Copyright
© Efurhievwe Andrew

