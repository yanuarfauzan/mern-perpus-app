import mongoose from "mongoose";

const Buku = mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    penerbit: {
        type: String,
        required: true
    }
});

// params 1 collection, params 2 Schema
export default mongoose.model('Bukus', Buku);