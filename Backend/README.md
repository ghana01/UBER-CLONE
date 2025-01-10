# BACKEND API Documentation

## POST /user/register ENDPOINT

Register a new user in the system.

### Description
This endpoint allows new users to create an account by providing their basic information.

### HTTP Method
`POST`

### Endpoint
`/user/register`

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `fullname.firstname`: User's first name (minimum 3 characters)
- `fullname.lastname`: User's last name (optional, minimum 3 characters if provided)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 201 | User successfully created |
| 400 | Bad Request - Invalid input data |
| 409 | Conflict - Email already exists |
| 500 | Internal Server Error |

### Success Response Example
```json
{
    "status": "success",
    "message": "User registered successfully",
    "data": {
        "userId": "uuid",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "token": "string"
    }
}
```

### Error Response Example
```json
{
    "status": "error",
    "message": "Email already exists",
    "code": 409
}
```

## POST /user/login ENDPOINT

Authenticate a user and return a token.

### Description
This endpoint allows existing users to log in by providing their email and password.

### HTTP Method
`POST`

### Endpoint
`/user/login`

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | User successfully authenticated |
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Invalid email or password |
| 500 | Internal Server Error |

### Success Response Example
```json
{
    "status": "success",
    "message": "User authenticated successfully",
    "data": {
        "userId": "uuid",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "token": "string"
    }
}
```

### Error Response Example
```json
{
    "status": "error",
    "message": "Invalid email or password",
    "code": 401
}
```
