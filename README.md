# Install dependencies
```$ npm install```
# Running server
```$ npm start```
- The server listens at port 8080
# APIs
#### Student model
    {
        id: 1,
        name: 'Trương Đăng Vũ Linh',
        description: 'Đẹp trai nhưng nghèo',
        action: 'Đạt'
    }
#### Getting all students
```GET http://localhost:8080/students```
#### Getting a student by id
```GET http://localhost:8080/students/1```
#### Creating a student
```POST http://localhost:8080/students```
#### Deleting a student by id
```DELETE http://localhost:8080/students/1```
#### Updating a student by id
```PUT http://localhost:8080/students/1```
