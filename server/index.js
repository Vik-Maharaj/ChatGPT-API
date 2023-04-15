const express = require('express');
const app = express();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
