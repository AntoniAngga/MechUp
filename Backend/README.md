# rest-api

## Description
This simple authentcation API meant to make a simple CRUD with an authentcation system

#### Setup
https://api-sendiri.herokuapp.com/

##### Hint
The default database used is postgres but you can costom it with any sequelize-supported database such as:
* mysql
* sqlite3
* etc




| Route | HTTP | Description |
| :-------------- | ---- | :------------------------- |
| /api/signup  | POST | Sign up with new user info |
| /api/signin  | POST | Sign in while get an access token based on credentials |
| /api/users  | GET | Get all data users info (admin only) |
| /api/users/:id  | GET | Get all data users info (admin only) |
| /api/users  | POST | Create a user (admin only) |
| /api/users/:id  | DELETE | Delete a user (admin only) |
| /api/users/:id  | PUT | Update a user with new info (admin and authenticated user) |