// sıralama ve saydırma 

function sayiGirisi() {
    let sayilar = [];
    let tekSayilar = [];
    let ciftSayilar = [];
    

  for (let i = 0; i < 10; i++) {
    let sayi = prompt((i + 1) + "sayi giriniz:");


    if (sayi % 2 === 0) {
      ciftSayilar.push(sayi); 
    } else {
      tekSayilar.push(sayi); 
    }
  }
  
  console.log("tek sayilar: ", tekSayilar);
   console.log("cift sayilar: ", ciftSayilar);
}

sayiGirisi();

// Kullanıcıdan en az 10 tane sayı girmesini isteyelim
// Girilen her bir sayı tek ise "tekSayilar" dizisine, çift ise "ciftSayilar" dizisine eklensin.
// Daha sonra console'da "tek sayılar : " ve "çift sayılar : " diye yazdıralım.