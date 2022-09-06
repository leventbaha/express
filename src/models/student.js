const color = require('colors')

class Student {
	constructor(studentID, username, password) {
		this.studentID = studentID
		this.username = ''
		this.password = ''
		this.courses = []
	}

	addCourse(course) {
		this.courses.push(course)
	}

	takenCourse(course) {
		course.takenBy.push(this)
	}

	get personalInfo() {
		return `
# ${'StudentID:'.rainbow.bold} ${this.studentID} has
## ${this.courses.length} courses

${this.courses
	.map(course => {
		return `### ${course.coursename.red.bold}`
	})
	.join('\n')}
  `
	}

	set personalInfo(newValue) {
		throw new Error('Profile is only a getter. You cannot override it.')
	}
}

module.exports = Student
