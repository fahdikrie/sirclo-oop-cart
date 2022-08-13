import ICart from "../types/Cart";
import IProduk from "../types/Produk";
import Produk from "./Produk";

export default class Cart implements ICart  {
  listProduk: IProduk[];

  constructor() {
    this.listProduk = [];
  }

  tambahProduk(kodeProduk: string, kuantitas: number) {
    const produkIdx = this.listProduk.findIndex(produk => produk.kodeProduk === kodeProduk);
    const isProdukInCart = produkIdx !== -1;

    if (isProdukInCart) {
      this.listProduk[produkIdx].tambahKuantitas(kuantitas);

      return;
    }

    this.listProduk.push(new Produk(kodeProduk, kuantitas));
  }

  hapusProduk(kodeProduk: string) {
    this.listProduk = this.listProduk.filter(produk => produk.kodeProduk !== kodeProduk);
  }

  getKuantitasProduk(kodeProduk: string): number {
    const produk = this.listProduk.filter(produk => produk.kodeProduk === kodeProduk);

    if (produk.length === 0) {
      return 0;
    }

    return produk[0].kuantitas;
  }

  tampilkanCart() {
    if (this.ukuranCart() === 0) {
      console.log("Keranjang anda kosong");
    }

    const output: string[] = [];

    this.listProduk.map(produk => {
      output.push(`${produk.kodeProduk} (${produk.kuantitas})`);
    })

    console.log(output.join("\n"))
  }

  kosongkanCart() {
    this.listProduk = [];
  }

  ukuranCart() {
    return this.listProduk.length;
  }
}