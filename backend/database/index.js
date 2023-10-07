import sqlite from 'better-sqlite3'
import createTables from './migration/createTables/index.js'
import addHouses from './migration/addHouses/index.js'

const createDb = (dbPath) => {
    const db = sqlite(dbPath)
    return db
}

const db = createDb('./database/database.db')
createTables(db)

export default db
