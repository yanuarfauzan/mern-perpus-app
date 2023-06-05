import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBuku = () => {

    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState("");
    const [penerbit, setPenerbit] = useState("");

    const navigate = useNavigate();

    // menangkap parameter id
    const { id } = useParams();

    const updateBuku = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/buku/${id}`, {
                judul,
                penulis,
                penerbit
            })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getBukuById = async () => {
            const response = await axios.get(`http://localhost:5000/buku/${id}`);
            setJudul(response.data.judul);
            setPenulis(response.data.penulis);
            setPenerbit(response.data.penerbit);
        }

        getBukuById();
    }, [id]);




    return (
        <div className='columns'>
            <div className='column is-half'>
                <form className='mt-5' onSubmit={updateBuku}>
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

export default EditBuku
