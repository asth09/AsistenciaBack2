import server from './app.js'
import { connectDB } from './db.js'

connectDB()
 

export const app = server