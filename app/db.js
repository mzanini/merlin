import Dexie from 'dexie'

const db = new Dexie('DeeMemoryDB')
db.version(1).stores({ games: '++id', characters: '++id', races: '++id' })

export default db
