import Cart from "../models/Cart";

describe("Test suite for index.ts", () => {
  let keranjang: any;
  let logSpy: any;

  beforeAll(() => {
    logSpy = jest.spyOn(console, 'log');
    keranjang = new Cart();
  })

  test("index should be able to produce the right output", () => {
    keranjang.tambahProduk("Pisang Hijau", 2);
    keranjang.tambahProduk("Semangka Kuning", 3);
    keranjang.tambahProduk("Apel Merah", 1);
    keranjang.tambahProduk("Apel Merah", 4);
    keranjang.tambahProduk("Apel Merah", 2);
    keranjang.hapusProduk("Semangka Kuning");
    keranjang.hapusProduk("Semangka Merah");
    keranjang.tampilkanCart();

    expect(logSpy).toHaveBeenCalledWith("Pisang Hijau (2)\nApel Merah (7)");
  });
})