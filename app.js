const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.listen(3001, () => {
    console.log("Server running on port 3000");
});

const students = [
    {
        id: 1,
        name: 'Trương Đăng Vũ Linh',
        description: 'Đẹp trai nhưng nghèo',
        action: 'Đạt'
    },   {
        id: 2,
        name: 'Triệu Hải Đăng',
        description: 'Yêu việt hết mình và dự định xuống c02',
        action: 'Xem xét'
    },    {
        id: 3,
        name: 'Nguyễn Quang Sáng',
        description: 'Thường xuyên ốm, nghỉ không báo',
        action: 'Xem xét'
    },{
        id: 4,
        name: 'Nguyễn Văn Giang',
        description: 'Nhà giàu',
        action: 'Xem xét'
    },{
        id: 5,
        name: 'Dương Long',
        description: 'Thường xuyên ngủ gật trong giờ',
        action: 'Xem xét'
    },
];

app.get("/students", (req, res, next) => {
    res.json(students);
});
app.get("/students/:id", (req, res, next) => {
    const id = +req.params.id;
    const index = findStudentIndex(id);
    if(index !== -1) {
        res.json(students[index]);
    } else {
        res.status(404).json({message: 'Not found'});
    }
});
app.post("/students", (req, res, next) => {
    const student = {
        id: (new Date()).getTime(),
        name: req.body.name,
        description: req.body.description,
        action: req.body.action
    };
    students.push(student);
    res.json(student);
});
app.delete("/students/:id", (req, res, next) => {
    const id = +req.params.id;
    const index = findStudentIndex(id);
    if(index !== -1) {
        students.splice(index, 1);
        res.json({message: 'Student deleted', id: id});
    } else {
        res.status(404).json({message: 'Not found'});
    }
});

app.put("/students/:id", (req, res, next) => {
    const id = +req.params.id;
    const index = findStudentIndex(id);
    if(index !== -1) {
        const student = students[index];
        student.name = req.body.name;
        student.action = req.body.action;
        student.description = req.body.description;
        res.json(student);
    } else {
        res.status(404).json({message: 'Not found'});
    }
});

function findStudentIndex(id) {
    for(let i = 0; i < students.length; i++) {
        if(students[i].id === id) {
            return i;
        }
    }
    return -1;
}
