# itelect2-project
My IT Elective 2 backend web development project.

This project was started on July 1, 2026.

## GT9 Authentication & Database Screenshots

### Authentication Endpoints

* **POST /api/auth/register (201 Created)**
  ![POST Register 201](./screenshots/GT9POSTregister.png)

* **POST /api/auth/login (200 OK - Token Issued)**
  ![POST Login 200](./screenshots/GT9POSTlogin.png)

* **POST /api/auth/login (401 Unauthorized - Invalid Credentials)**
  ![POST Login 401](./screenshots/GT9POSTlogin401.png)

---

### Security & Token Verification

* **JWT Verification & Signature Check (jwt.io)**
  ![JWT Verification](./screenshots/GT9JWTverification.png)

---

### Database Screenshots (Hashed Passwords)

* **pgAdmin Users Table**
  ![pgAdmin GT9 Users](./screenshots/Postgre_EncryptedPassWithRole1.png)
    ![pgAdmin GT9 Users](./screenshots/Postgre_EncryptedPassWithRole2.png)


---

## GT8 Postman & Database Screenshots

### GET 
* **GET /api/users (200 OK)**
  ![Get Users](./GT8GETusers.png)

* **GET /api/tasks with (200 OK)**
  ![Initial GET Tasks](./GT8GETtasks.png)

* **GET /api/tasks/999 (404 Not Found)**
  ![GET Task 999 404](./GT8GETtasks999.png)

* **GET /api/tasks/6**
  ![GET Task 6](./GT8GETtasks6.png)

---

### POST 
* **POST /api/tasks (201 Created)**
  ![POST Task 201](./GT8POSTtasks.png)

---

### PUT 

* **PUT /api/tasks/2 (200 OK)**
  ![PUT Task 2](./GT8PUTtasks2.png)

---

### DELETE 
* **DELETE /api/tasks/6 (200 OK)**
  ![DELETE Task](./GT8DELETEtasks6.png)

---

### Database Screenshots (Users & Tasks)
![pgAdmin Users](./GT8pgadminUsers.png)
![pgAdmin Tasks](./GT8pgadminTasks.png)