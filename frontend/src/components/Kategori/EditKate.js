import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const EditKate = () => {
    const [nama_kategori, setNama_kategori] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    const saveKate = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/kategori", {
                nama_kategori
            });
            navigate("/kategori");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getKateById = async () => {
            const response = await axios.get(`http://localhost:5000/kategori/${id}`);
            setNama_kategori(response.data.nama_kategori);
        }
        getKateById();
    }, [id]);

    return (
        <div className='columns'>
            <div className='column is-half'>
                <form className='mt-5' onSubmit={saveKate}>
                    <div className='field'>
                        <label className='label'>nama kategori</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder='nama kategori' value={nama_kategori} onChange={(e) => setNama_kategori(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button className='button is-success'>Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditKate
