import Cart from "./models/Cart";

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
