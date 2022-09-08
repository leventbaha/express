const express = require('express')

const router = express.Router()

const users = [
	{ name: 'marie', age: 20 },
	{ name: 'markus', age: 23 },
	{ name: 'thomas', age: 24 },
]

/* GET users listing. */
router.get('/', (req, res) => {
	if (req.query.name) {
		return res.send(users.find(user => user.name === req.query.name))
	}
	return res.send(users)
})

router.get('/:userId', function (req, res, next) {
	const user = users[req.params.userId]
	if (user) res.send(user)
	else res.sendStatus(404)
})

module.exports = router
