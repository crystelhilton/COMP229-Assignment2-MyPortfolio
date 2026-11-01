import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

// Load environment variables from .env file
dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) })

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
  mongoUri:
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/Portfolio'
}

export default config
