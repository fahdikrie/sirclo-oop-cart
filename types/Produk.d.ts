export default interface IProduk {
  // Class properties
  kodeProduk: string;
  kuantitas: number;

  // Class methods
  tambahKuantitas(kuantitas: number): void;
}