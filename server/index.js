const express = require('express')
const next = require('next')
const questionsRouter = require('./routes/questions')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const run = async () => {
	try {
		await app.prepare()

		const server = express()
		server.use('/static', express.static('public'))
		server.use('/favicon.ico', express.static('./favicon.ico'))
		server.use('/api', questionsRouter)

		server.get('*', handle)

		server.listen(port, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

module.exports = {
	run,
}
