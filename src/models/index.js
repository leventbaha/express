const Student = require('./student')
const Course = require('./course')

const marie = new Student(9587, '', '')
const markus = new Student(6881, '', '')
const thomas = new Student(5457, '', '')

const math101 = new Course('math101')
const compsci101 = new Course('compsci101')

marie.addCourse(math101)
marie.addCourse(compsci101)

markus.takenCourse(math101)
thomas.takenCourse(math101)

console.log(marie.personalInfo)
