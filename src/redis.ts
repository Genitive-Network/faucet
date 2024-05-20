import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://romantic-hornet-44884.upstash.io',
  token: process.env.UPSTASH_TOKEN as string,
})

export default redis