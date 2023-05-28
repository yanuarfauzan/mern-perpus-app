import express from "express";
import mongoose from "mongoose";
// cors untuk agar api bisa diakses diluar domain
import cors from "cors";

import BukuRoute from "./routes/BukuRoute.js";

const app = express();

// koneksi database
mongoose.connect('mongodb://127.0.0.1:27017/web_perpus', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
// middleware agar bisa menerima data dalam json
app.use(express.json());

app.use(BukuRoute);

app.listen(5000, () => console.log('Server up and running...'));
