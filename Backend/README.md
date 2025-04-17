# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Method
`POST`

### URL
`/users/register`

### Request Body
The request body should be in JSON format and must include the following fields:

| Field               | Type   | Required | Description                                      |
|---------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`| String | Yes      | First name of the user (minimum 3 characters).  |
| `fullname.lastname` | String | Yes      | Last name of the user (minimum 3 characters).   |
| `email`             | String | Yes      | Email address of the user (must be valid).      |
| `password`          | String | Yes      | Password for the user (minimum 6 characters).   |

Example request body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}