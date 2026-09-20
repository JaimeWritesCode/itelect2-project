## GT10 Role-Based Authorization Screenshots

### Middleware & Route Protection

* **verifyToken on POST, PUT and DELETE, requireRole('admin') on DELETE (api.js)**
  ![api.js routes](./screenshots/gt10api.js.png)

---

### Postman Tests (DELETE /api/tasks/:id)

* **No token (401 Unauthorized)**
  ![DELETE no token 401](./screenshots/gt10deleteNoToken.png)

* **Regular user's token (403 Forbidden)**
  ![DELETE as member 403](./screenshots/gt10deleteAsMember.png)

* **Admin token (200 OK)**
  ![DELETE as admin 200](./screenshots/gt10deleteAsAdmin.png)

* **Admin login (200 OK - Token Issued)**
  ![Admin token](./screenshots/gt10adminToken.png)

---