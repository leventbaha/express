class Student {
	constructor(name, surname, year, username) {
		this.name = name
		this.surname = surname
		this.year = year
		this.username = username
		this.password = ''
		this.courses = []
		this.exams = []
	}
}

module.exports = Student
