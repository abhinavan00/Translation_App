import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import OpenAI from 'openai';

const PORT = 8001
const app = express()
const client = new OpenAI()

// MIDDLEWARE
app.use(express.json())
app.use(cors())

app.post('/api/translate', async(req, res) => {

    const { userPrompt } = req.body
    const response = await client.responses.create({
        model: process.env.OPENAI_MODEL,
        input: userPrompt
    })
    res.json({message: response.output_text})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})