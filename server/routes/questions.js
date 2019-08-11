const express = require('express')

const router = express.Router()

router.route('/questions').get((req, res) => {
	return res.json({ questions: [] })
})

module.exports = router
