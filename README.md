# itelect2-project
My IT Elective 2 backend web development project.

This project was started on July 1, 2026.

## GT8 Postman & Database Proofs

### Category A: Standard GET Endpoints
* **GET /api/users (200 OK)**
  ![GET Users]

* **GET /api/tasks with User JOIN (200 OK)**
  ![Initial GET Tasks]

* **GET /api/tasks/999 (404 Not Found)**
  ![GET Task 999 404]

---

### Category B: POST Lifecycle (Create & Verify)
* **POST /api/tasks (201 Created)**
  ![POST Task 201]

* **GET /api/tasks (Verification after POST)**
  ![GET Tasks After POST]

---

### Category C: PUT Lifecycle (Update & Verify)
* **GET /api/tasks/1 (Before Update)**
  ![GET Task 1 Before PUT]

* **PUT /api/tasks/1 (200 OK)**
  ![PUT Task 1]

* **GET /api/tasks/1 (After Update)**
  ![GET Task 1 After PUT]

---

### Category D: DELETE Lifecycle (Delete & Verify 404)
* **DELETE /api/tasks/:id (200 OK)**
  ![DELETE Task]

* **GET /api/tasks/:id (404 Verification after DELETE)**
  ![GET Task After DELETE 404]

---

### Category E: Database State
* **pgAdmin Table Rows (Users & Tasks)**
  ![pgAdmin Rows]