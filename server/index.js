import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json({ limit: "30mb", inflate: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000

// DataBase MongoDB Atlas Connection
const CONNECTION_URL = 'mongodb+srv://imskanand:imskanand123@cluster0.yqngg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`)))
    .catch((error) => console.log(error.message))
}
