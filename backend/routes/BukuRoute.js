import express from "express";
import {
    getBuku,
    getBukuById,
    saveBuku,
    updateBuku,
    deleteBuku
} from "../controller/BukuController.js";

const router = express.Router();

router.get('/buku', getBuku);
router.get('/buku/:id', getBukuById);
router.post('/buku', saveBuku);
router.patch('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

export default router;