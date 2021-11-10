const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

const router = express.Router()

//Get projects
router.get('/',  async (request, response) => {
  try {
    const projects = await loadPortfolio()
    response.send(await projects.find().toArray())
  } catch (error) {
    console.error(error)
  }
})

//Connect to DB
async function loadPortfolio() {
  const client = await mongodb.MongoClient.connect(
    process.env.DB_URI, { useNewUrlParser: true }
  )

  return client.db('bureau').collection('projects')
}

module.exports = router