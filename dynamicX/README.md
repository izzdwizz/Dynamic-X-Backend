# Dynamic-X-Backend

This is the server-side code containing the database setup, routes, and controllers for the **Dynamic-X** application. The backend handles task management, user authentication, and integrates seamlessly with the frontend.

---

## Features

- **TypeORM Integration**: Simplified database operations.
- **MySQL Database**: Reliable and efficient storage for user and task data.
- **Environment Configuration**: Securely manage sensitive data using `dotenv`.
- **CORS Setup**: Configured to allow API requests only from the frontend.
- **RESTful API**: Modular and well-structured endpoints for better maintainability.

---

## Prerequisites

Before setting up the project, ensure the following tools are installed:

- **Node.js** (v16+)
- **npm** or **yarn**
- **MySQL** server

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dynamicX
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your database configuration:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=task_management
   ```

4. Run the MySQL server and create the required database:

   ```sql
   CREATE DATABASE task_management;
   ```

5. Start the server:
   ```bash
   npm start
   ```

---

## Project Structure

```
src/
├── entity/
│   ├── User.ts        # User entity schema
│   └── Task.ts        # Task entity schema
├── routes/
│   └── index.ts       # Main route configuration
├── server.ts          # Entry point for the server
└── datasource.ts      # Database configuration
```

---

## API Endpoints

### Base URL

```
http://localhost:3000/api/v1
```

### Routes

| Method   | Endpoint    | Description         |
| -------- | ----------- | ------------------- |
| `GET`    | `/getTasks` | Fetch all tasks     |
| `POST`   | `/create`   | Create a new task   |
| `PUT`    | `/:id`      | Update a task by ID |
| `DELETE` | `/:id`      | Delete a task by ID |
| `POST`   | `/login`    | Authenticate a user |
| `POST`   | `/register` | Register a user     |

---

## Configuration

The backend uses **CORS** to ensure secure access from the frontend. If your frontend runs on a different origin, update the `cors` configuration in `index.ts`:

```javascript
app.use(
  cors({
    origin: "http://your-frontend-origin", // Replace with your frontend's URL
    allowedHeaders: "Content-Type,Authorization",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);
```

---

## Scripts

- **Start the Server**:

  ```bash
  npm start
  ```

- **TypeORM CLI Commands**:
  ```bash
  npm run typeorm
  ```

---

## Dependencies

| Dependency         | Description                            |
| ------------------ | -------------------------------------- |
| `express`          | Web framework for building the backend |
| `typeorm`          | ORM for managing database interactions |
| `reflect-metadata` | Required by TypeORM                    |
| `dotenv`           | Loads environment variables            |
| `cors`             | Handles Cross-Origin Resource Sharing  |
| `mysql2`           | MySQL client for Node.js               |
| `bcrypt`           | Password hashing                       |
| `jsonwebtoken`     | User authentication via tokens         |

---

## Troubleshooting

1. **Database Connection Error**:

   - Verify that the `.env` file is correctly configured.
   - Ensure the MySQL server is running.

2. **Task Synchronization**:

   - In `datasource.ts`, the `dropSchema` option resets the schema on each server start. Set it to `false` for production environments:
     ```javascript
     dropSchema: false,
     ```

3. **CORS Issues**:
   - Confirm the origin in the CORS configuration matches your frontend's URL.

---

## Future Enhancements

- Add pagination for task retrieval.
- Implement role-based access control.
- Enhance logging for better error tracking.

---

## License

This project is open-source under the MIT License. Feel free to use and modify it for your own purposes.

---

Happy coding! 🚀
