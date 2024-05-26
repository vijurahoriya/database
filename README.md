# Hospital API

## Overview

This project provides a RESTful API for managing patient registrations and fetching psychiatrist details for hospitals.

## Major Libraries/Frameworks Used

- **Express:** For building the web server and handling routes.
- **MySQL2:** For connecting and interacting with the MySQL database.
- **dotenv:** For loading environment variables from a `.env` file.
- **multer:** For handling file uploads.
- **bcryptjs:** For hashing passwords.

## API Endpoints

### Register a New Patient

- **URL:** `/api/patients/register`
- **Method:** `POST`
- **Request Body:**
  - `name`: (string) Patient's name.
  - `address`: (string) Patient's address (minimum 10 characters).
  - `email`: (string) Patient's email (valid email format).
  - `phone`: (string) Patient's phone number (minimum 10 digits).
  - `password`: (string) Patient's password (must contain one uppercase, one lowercase, and a number, length 8-15 characters).
  - `photo`: (file) Patient's photo.
  - `hospital_id`: (integer) ID of the hospital.

### Fetch Psychiatrists and Patient Details by Hospital ID

- **URL:** `/api/psychiatrists/hospital-psychiatrists`
- **Method:** `POST`
- **Request Body:**
  - `hospitalId`: (integer) ID of the hospital.

## Postman Collection

[Link to Postman Collection](#) ([(https://documenter.getpostman.com/view/28625803/2sA3QqhDXP))
