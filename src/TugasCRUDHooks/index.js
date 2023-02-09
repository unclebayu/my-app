import React, { Component } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

export default class TugasCRUDHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buahs:  [
              {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
              {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
              {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
              {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
              {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
              ],
      nama: "",
      hargaTotal: 0,
      beratTotal: 0,
      hargaKg:0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        buahs: [
          ...this.state.buahs,
          {
            id: this.state.buahs.length + 1,
            nama: this.state.nama,
            hargaTotal: this.state.hargaTotal,
            beratTotal: this.state.beratTotal,
            hargaKg: this.state.hargaKg,
          },
        ],
      });
    } else {
      const buahYangSelainDiPilih = this.state.buahs
        .filter((buah) => buah.id !== this.state.id)
        .map((filterBuah) => {
          return filterBuah;
        });

        this.setState({
            buahs: [
              ...buahYangSelainDiPilih,
              {
                id: this.state.buahs.length + 1,
                nama: this.state.nama,
                hargaTotal: this.state.hargaTotal,
                beratTotal: this.state.beratTotal,
                hargaKg: this.state.hargaKg,
              },
            ],
          });
    }

    this.setState({
        buahs: [],
        nama: "",
        hargaTotal: 0,
        beratTotal: 0,
        hargaKg:0,
        id: "",
    });
  };

  editData = (id) => {
    const buahYangDiPilih = this.state.buahs
      .filter((buah) => buah.id === id)
      .map((filterBuah) => {
        return filterBuah;
      });

    this.setState({
      nama: buahYangDiPilih[0].nama,
      deskripsi: buahYangDiPilih[0].deskripsi,
      harga: buahYangDiPilih[0].harga,
      id: buahYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const buahBaru = this.state.buahs
    .filter((buah) => buah.id !== id)
    .map((filterBuah) => {
      return filterBuah;
    });

    this.setState({
        buahs : buahBaru
    })

  }

  render() {
    return (
      <div>
        <div className="custom-box">
          <Table buahs={this.state.buahs} editData={this.editData} hapusData={this.hapusData} />
          <FormInput
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
