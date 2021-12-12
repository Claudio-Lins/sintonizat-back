const express = require('express')
const app = express()

const Newsletter = require('../models/Newsletter')
app.use(express.json())

export default {
  async findAllNewsletters (req, res) {
    try {
      const newsletters = await Newsletter.findAll()
      res.json(newsletters)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async createNewsletter (req, res) {
    try {
      const {name, email} = req.body
      const newsletter = await Newsletter.findOne({
        where: { email },
      })
      if (newsletter) {
        res.status(400).json({ error: 'E-mail já cadastrado' })
      }
      newNewsletter = await Newsletter.create({
        name,
        email
      })
      res.json(newNewsletter)

    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
