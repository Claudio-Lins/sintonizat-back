const express = require('express')
const cors = require('cors')
const app = express()

//const db = require('./db')

const Newsletter = require('./models/Newsletter')

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

app.get('/newsletter', async (req, res) => {
  const listNewsLetters = await Newsletter.findAll({
    attributes: ['id', 'name', 'email', 'createdAt'],
  })
  // .then((datanewsletter) => {
  //     return res.listNewsLatters.json({
  //         erro: false,
  //         datanewsletter
  //     });
  // }).catch(() => {
  //     return res.status(400).json({
  //         erro: true,
  //         mensagem: "Erro: Nenhum valor encontrado para a página home!"
  //     });
  // });

  res.json(listNewsLetters)
})



app.post('/add-newsletter', async (req, res) => {
  lixo = req.body.email
  const isEmail = await Newsletter.findOne({ where: { email: req.body.email } })
  if (!isEmail) {
    await Newsletter.create(req.body)
      .then((newsletter) => {
        console.log('Cadastro enviado com sucesso!')
        return res.json({
          error: false,
          mensagem: 'Cadastro enviado com Sucesso!',
        })
      })
      .catch(() => {
        console.log('Erro ao salvar Newsletter!')
        return res.json({
          error: true,
          message: 'Erro ao salvar newsletter!',
        })
      })
    } else {
    console.log('Email já cadastrado!')
    return res.json({
      error: true,
      message: 'Email já cadastrado!',
    })
  }
})


app.listen(8080, () => {
  console.log('Server running on port 8080')
})
