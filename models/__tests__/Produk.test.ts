import Produk from "../Produk";

describe("Testing for Cart class", () => {
  const pisangHijau = new Produk("Pisang Hijau", 1);

  /** Test suite for `tambahKuantitas` */
  test("should be able to add quantity as stated on the parameter to keranjang", () => {
    pisangHijau.tambahKuantitas(2);
    expect(pisangHijau.kuantitas).toEqual(3);
  });

  test("should be able to increment quantity to keranjang", () => {
    pisangHijau.tambahKuantitas();
    expect(pisangHijau.kuantitas).toEqual(4);
  });
})