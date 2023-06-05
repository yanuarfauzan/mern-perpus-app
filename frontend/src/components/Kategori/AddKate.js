import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const AddKate = () => {
    const [nama_kategori, setNama_kategori] = useState([]);

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

export default AddKate
