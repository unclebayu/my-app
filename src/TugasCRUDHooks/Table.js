import React from "react";

<h1>Daftar Harga Buah</h1>
const Table = ({ buahs, editData, hapusData }) => {
    return (
      <form>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga Per Kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {buahs.map((buah, index) => {
            return (
              <tr key={index} >
                <td>{index+1}</td>
                <td>{buah.nama}</td>
                <td>Rp.{buah.hargaTotal}</td>
                <td>{buah.beratTotal}</td>
                <td>Rp.{buah.hargaKg}</td>
                <td>
                  <button className="btn btn-warning mr-2" onClick={() => editData(buah.id) }>Edit</button>
                  <button className="btn btn-danger" onClick={() => hapusData(buah.id) }>Hapus</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </form>
    );
};

export default Table;