// db.js
import postgres from 'postgres'

const connectionString = 'postgresql://inaara_ai.vmpilcujqwmxqygnjxbf:Enigma%4012345678@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
const sql = postgres(connectionString)

export default sql
