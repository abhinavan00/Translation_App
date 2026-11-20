import express from 'express';
import 'dotenv/config';
import OpenAI from 'openai';

const PORT = 8001
const app = express()
const client = new OpenAI()

app.get('/', async(req, res) => {
    const response = await client.responses.create({
        model: process.env.OPENAI_MODEL,
        input: `Hi, How're you doing today?`
    })
    res.json({message: response.output_text})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})