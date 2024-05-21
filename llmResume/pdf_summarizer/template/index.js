require('dotenv').config()
const {Client} = require('@octoai/client');

const client = new Client(process.env.OCTOAI_TOKEN); 

(async () => {
    const completion = await client.chat.completions.create({
        "model" : "llama-2b-13b-chat-fp16",
        "messages" : [
            {
                "role" : "system",
                "content" : "Hello, I am a friendly assistant! Ask me anything.",

    
            },{
                "role":"user",
                "content": "What is the capital of France?",
            }
        ]
    });
    console.log(completion.choices[0].message.content);
});