import IProduk from "./Produk";

export default interface ICart {
  // Class properties
  listProduk: IProduk[];

  // Class methods
  tambahProduk(kodeProduk: string, kuantitas: number): void;
  hapusProduk(kodeProduk: string): void;
  tampilkanCart(): void;
}