const Student = require('./student')
const Course = require('./course')

const marie = new Student('Marie', 'Scholz', 1, 'marie578')
const markus = new Student('Markus', 'Malz', 3, 'markusm')
const thomas = new Student('Thomas', 'Kassel', 4, 'thomas96')

const math101 = new Course('math101')
const compsci101 = new Course('compsci101')
const algorithms = new Course('algorithms')
const databaseSystems = new Course('databaseSystems')

function addCourse(name, surname, year, username) {
	return {
		name,
		surname,
		year,
		username,
		courses: [],
	}
}

marie.addCourse(math101)
marie.addCourse(compsci101)
markus.addCourse(algorithms)
thomas.addCourse(databaseSystems)
