import Kategori from "../models/KategoriModel.js";

export const getKategori = async (req, res) => {
    try {
        const kategoris = await Kategori.find();
        // memberikan respon mengirim data berbentuk json
        res.json(kategoris);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getKategoriById = async (req, res) => {
    try {
        const kategori = await Kategori.findById(req.params.id);
        // memberikan respon mengirim data berbentuk json
        res.json(kategori);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveKategori = async (req, res) => {
    const kategori = new Kategori(req.body);
    try {
        const insertedKategori = await kategori.save();
        // memberikan respon mengirim data berbentuk json
        res.status(201).json(insertedKategori);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateKategori = async (req, res) => {
    try {
        const updatedKategori = await Kategori.updateOne({_id: req.params.id}, {$set: req.body});
        // memberikan respon mengirim data berbentuk json
        res.status(200).json(updatedKategori);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteKategori = async (req, res) => {
    try {
        const deletedKategori = await Kategori.deleteOne({_id: req.params.id});
        // memberikan respon mengirim data berbentuk json
        res.status(200).json(deletedKategori);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}