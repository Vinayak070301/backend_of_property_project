# Property Project

## Overview
This project is a backend service for managing properties, including authentication, property listings, and related functionalities.

## Deployment
The backend is deployed at:  https://backend-of-property-project.vercel.app/  [Property Project Backend]

## Features
- User authentication with JWT
- CRUD operations for properties
- Role-based access control (Admin & User)
- Public property listings (home & featured properties)
- Secure property management for admins

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Vercel

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/property-project.git
   cd property-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (create a `.env` file):
   ```env
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Public Routes (No Authentication Required)
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | /home               | Get all properties       |
| GET    | /featured           | Get featured properties  |

### Authentication Routes
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /auth/signup        | User registration        |
| POST   | /auth/login         | User login               |

### Admin-Only Routes (Requires Authentication & Admin Role)
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /add                | Add a new property       |
| PUT    | /update/:id         | Update a property        |
| DELETE | /delete/:id         | Delete a property        |

## Contributing
Feel free to fork and contribute! Create a pull request for any changes.

## License
This project is licensed under the MIT License.

