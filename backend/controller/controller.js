const fs = require('fs').promises
const path = require('path')

const dbPath = path.join(__dirname, '../db/db.json')

// Helper function to read database
const readDatabase = async () => {
	try {
		const data = await fs.readFile(dbPath, 'utf8')
		return JSON.parse(data)
	} catch (error) {
		console.error('Error reading database:', error)
		return {events: []}
	}
}

// Helper function to write database
const writeDatabase = async (data) => {
	try {
		await fs.writeFile(dbPath, JSON.stringify(data, null, 2))
		return true
	} catch (error) {
		console.error('Error writing database:', error)
		return false
	}
}

// Create a new timeline event
module.exports.createTimelineEvent = async (req, res) => {
	try {
		const {date, time, eventTitle, eventDescription} = req.body

		// Validate required fields
		if (!date || !time || !eventTitle || !eventDescription) {
			return res.status(400).json({
				error: 'All fields are required: date, time, eventTitle, eventDescription',
			})
		}

		// Read current database
		const db = await readDatabase()

		// Create new event object
		const newEvent = {
			id: Date.now().toString(),
			date,
			time,
			eventTitle,
			eventDescription,
			createdAt: new Date().toISOString(),
		}

		// Add event to database
		db.events.push(newEvent)

		// Efficiently sort events by date and time before saving
		db.events.sort((a, b) => {
			// Compare date first, then time
			if (a.date !== b.date) {
				return a.date.localeCompare(b.date)
			}
			return a.time.localeCompare(b.time)
		})

		// Save to database
		const success = await writeDatabase(db)

		if (!success) {
			return res.status(500).json({error: 'Failed to save event'})
		}

		res.status(201).json(newEvent)
	} catch (error) {
		console.error('Error creating timeline event:', error)
		res.status(500).json({error: 'Internal server error'})
	}
}

// Get all timeline events
module.exports.getTimelineEvents = async (req, res) => {
	try {
		const db = await readDatabase()

		// Sort events by date and time
		const sortedEvents = db.events.sort((a, b) => {
			const dateTimeA = new Date(`${a.date}T${a.time}`)
			const dateTimeB = new Date(`${b.date}T${b.time}`)
			return dateTimeA - dateTimeB
		})

		res.status(200).json(sortedEvents)
	} catch (error) {
		console.error('Error fetching timeline events:', error)
		res.status(500).json({error: 'Internal server error'})
	}
}

module.exports.otherRoute = async (req, res) => {
	res.send('Other route')
}
