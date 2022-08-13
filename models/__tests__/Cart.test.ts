import Cart from "../Cart";

describe("Testing for Cart class", () => {
  const keranjang = new Cart();

  beforeEach(() => {
    keranjang.kosongkanCart();
    return keranjang;
  });

  /** Test suite for `tambahProduk` */
  test("should be able to add 1 Produk to keranjang", () => {
    keranjang.tambahProduk("Pisang Hijau", 2);

    expect(keranjang.ukuranCart()).toEqual(1);
  });

  test("should stack Produk quantities on multiple calling", () => {
    keranjang.tambahProduk("Apel Merah", 2);
    keranjang.tambahProduk("Apel Merah", 4);
    keranjang.tambahProduk("Apel Merah", 6);

    expect(keranjang.ukuranCart()).toEqual(1);
    expect(keranjang.getKuantitasProduk("Apel Merah")).toEqual(12);
  });

  /** Test suite for `hapusProduk` */
  test("should be able to delete Produk from Cart", () => {
    keranjang.tambahProduk("Pisang Hijau", 1);
    keranjang.hapusProduk("Pisang Hijau");

    expect(keranjang.ukuranCart()).toEqual(0);
  });

  test("should be able to proceed without error when deleting a nonexistent Produk", () => {
    keranjang.hapusProduk("Semangka merah");

    expect(keranjang.ukuranCart()).toEqual(0);
  });

  /** Test suite for `tampilkanCart` */
  test("should be able to show the content of the Cart", () => {
    const logSpy = jest.spyOn(console, 'log');

    keranjang.tambahProduk("Pisang Hijau", 1);
    keranjang.tambahProduk("Apel Merah", 2);
    keranjang.tampilkanCart();

    expect(logSpy).toHaveBeenCalledWith("Pisang Hijau (1)\nApel Merah (2)\n");
  });

  test("should be able to display error message when Cart is empty", () => {
    const logSpy = jest.spyOn(console, 'log');

    keranjang.tampilkanCart();

    expect(logSpy).toHaveBeenCalledWith("Keranjang anda kosong");
  });
})