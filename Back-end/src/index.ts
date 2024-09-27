import express from "express";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});