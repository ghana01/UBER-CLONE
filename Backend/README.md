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

## GET /user/profile ENDPOINT

Get the profile of the authenticated user.

### Description
This endpoint allows authenticated users to retrieve their profile information.

### HTTP Method
`GET`

### Endpoint
`/user/profile`

### Headers
- `Authorization`: Bearer token

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Returns the user profile |
| 401 | Unauthorized - If the user is not authenticated |

### Success Response Example
```json
{
    "status": "success",
    "message": "User profile retrieved successfully",
    "data": {
        "userId": "uuid",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com"
    }
}
```

### Error Response Example
```json
{
    "status": "error",
    "message": "Unauthorized",
    "code": 401
}
```

## GET /user/logout ENDPOINT

Logout the authenticated user.

### Description
This endpoint allows authenticated users to log out.

### HTTP Method
`GET`

### Endpoint
`/user/logout`

### Headers
- `Authorization`: Bearer token

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Successfully logged out |
| 401 | Unauthorized - If the user is not authenticated |

### Success Response Example
```json
{
    "status": "success",
    "message": "User logged out successfully"
}
```

### Error Response Example
```json
{
    "status": "error",
    "message": "Unauthorized",
    "code": 401
}
```
# Captain Routes

## Register Captain

**Endpoint:** `/register`

**Method:** `POST`

**Description:** Registers a new captain.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string", // Required, minimum 3 characters
    "lastname": "string" // Optional, minimum 3 characters if provided
  },
  "email": "string", // Required, must be a valid email
  "password": "string", // Required, minimum 6 characters
  "vehicle": {
    "color": "string", // Required, minimum 3 characters
    "plate": "string", // Required, minimum 3 characters
    "capacity": "number", // Required, minimum 1
    "vehicleType": "string" // Required, must be one of `car`, `motorcycle`, `auto`
  }
}
```

**Responses:**

- `201 Created`: Returns the created captain and a JWT token.
```json
{
  "token": "string", // JWT token
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string", // Hashed password
    "status": "string", // e.g., "inactive"
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "_id": "string", // Captain ID
    "__v": 0
  }
}
```

- `400 Bad Request`: If validation fails or captain already exists.
```json
{
  "status": "error",
  "message": "string" // Error message
}
```

## Login Captain

**Endpoint:** `/login`

**Method:** `POST`

**Description:** Authenticates a captain and returns a token.

**Request Body:**
```json
{
  "email": "string", // Required, must be a valid email
  "password": "string" // Required, minimum 6 characters
}
```

**Responses:**

- `200 OK`: Returns the authenticated captain and a JWT token.
```json
{
  "token": "string", // JWT token
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "string", // e.g., "active"
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "_id": "string", // Captain ID
    "__v": 0
  }
}
```

- `400 Bad Request`: If validation fails.
```json
{
  "status": "error",
  "message": "string" // Error message
}
```

- `401 Unauthorized`: If email or password is incorrect.
```json
{
  "status": "error",
  "message": "Invalid email or password"
}
```

## Get Captain Profile

**Endpoint:** `/profile`

**Method:** `GET`

**Description:** Retrieves the profile of the authenticated captain.

**Headers:**
- `Authorization`: Bearer token

**Responses:**

- `200 OK`: Returns the captain's profile.
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "string", // e.g., "active"
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "_id": "string", // Captain ID
    "__v": 0
  }
}
```

- `401 Unauthorized`: If the captain is not authenticated.
```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

## Logout Captain

**Endpoint:** `/logout`

**Method:** `GET`

**Description:** Logs out the authenticated captain.

**Headers:**
- `Authorization`: Bearer token

**Responses:**

- `200 OK`: Successfully logged out.
```json
{
  "status": "success",
  "message": "User logged out successfully"
}
```

- `401 Unauthorized`: If the captain is not authenticated.
```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

