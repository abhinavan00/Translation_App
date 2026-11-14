import express from 'express';

const PORT = 8001
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello, World!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})