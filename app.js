const express = require('express')
const cors = require('cors')
const app = express()

import { router } from './routes'

// const Newsletter = require('./models/Newsletter')
const Schedule = require('./models/Schedule')

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )
  app.use(cors())
  next()
})

app.use(router)


// SCHEDULE //

app.post('/add-schedule', async (req, res) => {
  await Schedule.create(req.body)
    .then((schedule) => {
      console.log('Cadastro enviado com sucesso!')
      return res.json({
        error: false,
        mensagem: 'Cadastro enviado com Sucesso!',
      })
    })
    .catch(() => {
      console.log('Erro ao salvar Schedule!')
      return res.json({
        error: true,
        message: 'Erro ao salvar Schedule!',
      })
    })
})

//PUT /schedule/:id
app.put('/add-schedule/:id', async (req, res) => {
  await Schedule.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((schedule) => {
      console.log('Cadastro atualizado com sucesso!')
      return res.json({
        error: false,
        mensagem: 'Cadastro atualizado com Sucesso!',
      })
    })
    .catch(() => {
      console.log('Erro ao atualizar Schedule!')
      return res.json({
        error: true,
        message: 'Erro ao atualizar Schedule!',
      })
    })
})


app.get('/schedule', async (req, res) => {
  const listSchedule = await Schedule.findAll({
    attributes: [
      'id',
      'title',
      'subtitle',
      'timeStart',
      'columnDay',
      'duration',
      'createdAt',
    ],
  })
  res.json(listSchedule)
})

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
