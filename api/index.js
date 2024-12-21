import express from 'express';
import { turso } from './turso.js';

const app = express();
const PORT = process.env.PORT ?? 8080;

// middlewear
app.use(express.json())

// routes
app.get("/", async (req, res) => {
    res.status(200).send(
        await turso.execute("SELECT * FROM USERS")
    )
})

app.post("/post", (req, res) => {
    res.send(`post received!\nbody: ${JSON.stringify(req.body)}`)
})

// running
app.listen(PORT, console.log(`Running on port: ${PORT}.`))