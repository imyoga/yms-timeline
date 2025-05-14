const moment = require('moment-timezone')

function getCurrentMomentLocal() {
	return moment().tz('America/Toronto')
}

module.exports = {getCurrentMomentLocal}
