export default async function apiCalls() {
    const res = await fetch('http://localhost:8001/api/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userPrompt: 'Hello'})
    })

    const data = await res.json()

    return data.message
}