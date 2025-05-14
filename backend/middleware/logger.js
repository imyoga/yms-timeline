const {getCurrentMomentLocal} = require('../Util/getCurrentMomentLocal')

function logger(req, res, next) {
	const start = Date.now()
	const {method, url} = req
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

	const logRequest = () => {
		const duration = Date.now() - start
		const {statusCode} = res
		console.log(
			`[${getCurrentMomentLocal().clone().format()}]___${statusCode}__${ip}__${duration}ms__${method}__${url}`
		)
	}

	res.on('finish', logRequest)
	res.once('close', logRequest)

	next()
}

module.exports = {logger}

/**
 * Key Differences
 *
 * 	res.on('finish', logRequest)
 * 	res.once('close', logRequest)
 *
Event Type:
'finish': Indicates a successful completion of the response.
'close': Indicates that the connection was closed, which could be due to a successful response or an error/abort.

Trigger Point:
'finish': Triggered after the response has been fully sent.
'close': Triggered when the connection is closed, which might happen before the response is fully sent.

Use Cases:
'finish': Best for logging successful responses and their metrics.
'close': Best for handling and logging scenarios where the response might not have been fully sent, such as client disconnections or errors.
 */
