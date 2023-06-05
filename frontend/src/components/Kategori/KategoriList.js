import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const KategoriList = () => {

    // useState
    const [kategori, setKategori] = useState([]);

    useEffect(() => {
        getKategori()
    }, []);

    const getKategori = async () => {
        const response = await axios.get("http://localhost:5000/kategori");
        setKategori(response.data);
    }

    const deleteKategori = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/kategori/${id}`);
            getKategori();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='columns'>
            <div className='column is-half'>
                <Link to={'/addKate'} className='button is-success mt-5'>Tambah Kategori</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Kategori</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kategori.map((kate, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{kate.nama_kategori}</td>
                                <td>
                                    <Link to={`/editKate/${kate._id}`} className='button is-info is-small mr-3'>Edit</Link>
                                    <button onClick={() => deleteKategori(kate._id)} className='button is-danger is-small'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default KategoriList
