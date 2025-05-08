//index.js
import path from 'node:path'
import { NeocitiesAPIClient } from 'async-neocities'

const client = new NeocitiesAPIClient(process.env.NEOCITIES_API_KEY);

console.log(await client.list()) // site files
console.log(await client.info()) // site info
