import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BukuList = () => {

    const [bukus, setBukus] = useState([]);

    useEffect(() => {
        getBukus();
    }, []);

    const navigate = useNavigate();

    const getBukus = async () => {
        const response = await axios.get("http://localhost:5000/buku");
        setBukus(response.data);
    }

    const deleteBuku = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/buku/${id}`);
            getBukus();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='columns'>
            <div className='column is-half'>
                <Link to="add" className='button is-success mt-5'>Tambah Buku</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Penulis</th>
                            <th>Penerbit</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bukus.map((buku, index) => (
                            <tr key="buku._id">
                                <td>{index + 1}</td>
                                <td>{buku.judul}</td>
                                <td>{buku.penulis}</td>
                                <td>{buku.penerbit}</td>
                                <td>
                                    <Link to={`edit/${buku._id}`} className='button is-info is-small mr-3'>Edit</Link>
                                    <button onClick={() => deleteBuku(buku._id)} className='button is-danger is-small'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BukuList
