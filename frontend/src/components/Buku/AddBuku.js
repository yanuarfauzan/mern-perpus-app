import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBuku = () => {

    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState("");
    const [penerbit, setPenerbit] = useState("");

    const navigate = useNavigate();

    const saveBuku = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/buku', {
                judul,
                penulis,
                penerbit
            })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='columns'>
            <div className='column is-half'>
                <form className='mt-5' onSubmit={saveBuku}>
                    <div className='field'>
                        <label className='label'>judul</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder='judul' value={judul} onChange={(e) => setJudul(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>penulis</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder='penulis' value={penulis} onChange={(e) => setPenulis(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>penerbit</label>
                        <div className='control'>
                            <input type="text" className='input' placeholder='penerbit' value={penerbit} onChange={(e) => setPenerbit(e.target.value)} />
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

export default AddBuku
