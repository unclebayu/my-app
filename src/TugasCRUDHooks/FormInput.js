import React from "react"

function FormInput () {
    return (
        <div className="custom-box">
            <h1>Form Daftar Harga Buah</h1>
            <hr />
            <form>
                <label>Nama</label>
                <input
                    type="text"
                    name="nama" 
                    value={this.props.nama} 
                    onChange={(event) => this.props.handleChange(event)}
                />
                <label>Harga Total</label>
                <input
                    type="text"
                    name="hargaTotal" 
                    value={this.props.hargaTotal} 
                    onChange={(event) => this.props.handleChange(event)}
                />
                <label>Berat Total</label>
                <input
                    type="text"
                    name="beratTotal" 
                    value={this.props.beratTotal} 
                    onChange={(event) => this.props.handleChange(event)}
                />
                <label>Harga Per Kg</label>
                <input
                    type="text"
                    name="hargaKg" 
                    value={this.props.hargaKg} 
                    onChange={(event) => this.props.handleChange(event)}
                />
                <button variant="primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default FormInput;