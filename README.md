## GT11 MVC Architecture Refactoring Screenshots

### Postman Tests

* **Auth Controller - Admin Login (200 OK & JWT Issued)**
  ![Auth Login](./screenshots/gt11_auth_login.png)

* **Task Controller - Get All Tasks (200 OK)**
  ![Get All Tasks](./screenshots/gt11_get_all_tasks.png)

* **Middleware - DELETE Task Unauthorized without Token (401 Unauthorized)**
  ![Delete No Token](./screenshots/gt11_delete_no_token.png)

* **Middleware & Task Controller - DELETE Task with Bearer Token (200 OK)**
  ![Delete With Token](./screenshots/gt11_delete_with_token.png)

---

## GT10 Role-Based Authorization Screenshots

### Middleware & Route Protection

* **verifyToken on POST, PUT and DELETE, requireRole('admin') on DELETE (api.js)**
  ![api.js routes](./screenshots/gt10api.js.png)

---

### Postman Tests (DELETE /api/tasks/:id)

* **Regular user's token (403 Forbidden)**
  ![DELETE as member 403](./screenshots/gt10deleteAsMember.png)

* **Admin token (200 OK)**
  ![DELETE as admin 200](./screenshots/gt10deleteAsAdmin.png)

* **Admin login (200 OK - Token Issued)**
  ![Admin token](./screenshots/gt10adminToken.png)

---