import IProduk from "../types/Produk";

export default class Produk implements IProduk  {
  kodeProduk: string;
  kuantitas: number;

  constructor(kodeProduk: string, kuantitas: number) {
    this.kodeProduk = kodeProduk;
    this.kuantitas = kuantitas;
  }

  tambahKuantitas(kuantitas: number = 1) {
    this.kuantitas += kuantitas;
  }
}