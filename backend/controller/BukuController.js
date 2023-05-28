// mengimport model
import Buku from "../models/BukuModel.js";

// function untuk mendapatkan semua data buku
export const getBuku = async (req, res) => {
    try {
        const bukus = await Buku.find();
        res.json(bukus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

// function untuk mendapatkan data buku berdasarkan id
export const getBukuById = async (req, res) => {
    try {
        const buku = await Buku.findById(req.params.id);
        res.json(buku);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

// function untuk menambahkan data buku
export const saveBuku = async (req, res) => {
    const buku = new Buku(req.body);
    try {
        const insertBuku = await buku.save();
        res.status(201).json(insertBuku);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// function untuk mengubah data buku
export const updateBuku = async (req, res) => {
    try {
        const updatedBuku = await Buku.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedBuku);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// function untuk menghapus data buku
export const deleteBuku = async (req, res) => {
    try {
        const deletedBuku = await Buku.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedBuku);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}