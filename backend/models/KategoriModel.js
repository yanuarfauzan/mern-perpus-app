import mongoose from "mongoose";

const Kategori = mongoose.Schema({
    nama_kategori: {
        type: String,
        required: true
    }
})

export default mongoose.model('kategori', Kategori);