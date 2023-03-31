import 'dotenv/config'

const e = process.env

export const isDevelopment = e.NODE_ENV === 'development'

export const SERVER_HOST = e.SERVER_HOST || 'localhost'
export const SERVER_PORT = e.SERVER_PORT || 4000

export const DATABASE_URL = e.DATABASE_URL

export const ENTROPY = e.ENTROPY || 'qwertyuiopasdfghjklzxcvbnm'
