import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputIdenLeng = () => {
  const [nama_depan, setNamDep] = useState("");
  const [nama_belakang, setNamBel] = useState("");
  const [tanggal_lahir, setTangLa] = useState("");
  const [jenis_kelamin, setJenKel] = useState("Laki-Laki");
  const [tahun_masuk, setTahMas] = useState("");
  const [nim, setNim] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [program_studi, setProdi] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/users`, {
        nama_depan,
        nama_belakang,
        tanggal_lahir,
        jenis_kelamin,
        tahun_masuk,
        nim,
        fakultas,
        program_studi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="columns mt-5 is-centered"
      style={{
        backgroundImage: `url('1127738_720.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Set tinggi menjadi 100% tinggi viewport
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="columns is-centered">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title is-centered">IDENTITAS LENGKAP</p>
          </header>
          <div className="card-content">
            <form onSubmit={saveUser} className="columns">
              {
                <>
                  <div className="column">
                    <div className="field">
                      <label className="label">Nama Depan</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={nama_depan}
                          onChange={(e) => setNamDep(e.target.value)}
                          placeholder="Nama Depan"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Nama Belakang</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={nama_belakang}
                          onChange={(e) => setNamBel(e.target.value)}
                          placeholder="Nama Belakang"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Tanggal Lahir</label>
                      <div className="control">
                        <input
                          type="date"
                          className="input"
                          value={tanggal_lahir}
                          onChange={(e) => setTangLa(e.target.value)}
                          placeholder="Tanggal Lahir???"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Jenis Kelamin</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select
                            value={jenis_kelamin}
                            onChange={(e) => setJenKel(e.target.value)}
                          >
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="field">
                      <label className="label">Tahun Masuk</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={tahun_masuk}
                          onChange={(e) => setTahMas(e.target.value)}
                          placeholder="Tahun Masuk"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">NIM</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={nim}
                          onChange={(e) => setNim(e.target.value)}
                          placeholder="Nomor Induk Mahasiswa"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Fakultas</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={fakultas}
                          onChange={(e) => setFakultas(e.target.value)}
                          placeholder="Fakultas"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Program Studi</label>
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          value={program_studi}
                          onChange={(e) => setProdi(e.target.value)}
                          placeholder="Program Studi"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            </form>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <button
                type="submit"
                className="button is-success"
                onClick={saveUser}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputIdenLeng;
