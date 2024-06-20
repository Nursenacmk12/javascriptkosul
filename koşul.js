// // ders ortalaması  bulma

// // vize1 %30 , vize2 %30 , final %40
let vize1=Number(prompt("vize1 den aldıgınız not: "))
let vize2=Number(prompt("vize2 den aldıgınız not: "))
let final=Number(prompt("final  den aldıgınız not: "))

let ortalama =( vize1 *0.3) + (vize2*0.3 )+ (final*0.4);

if(ortalama>=60){
  alert("Dersten geçtiniz..")
  console.log("Dersten geçtiniz..")
}else{
   alert ("Kaldınız..")
   console.log("Kaldınız..")
}

//  Birden fazla if kullanımı
// adı ve tck isteyeceksin

/* ad:boş geçmez
TCKN:11 karakterden oluşsun*/
let ad =prompt("Lütfen isminizi giriniz: ");
let tckn=prompt("Lütfen TCKN yi giriniz: ");
kontrolEt(ad,tckn);

function kontrolEt(ad,tckn){
  if(ad!=""){
    if(tckn.length=="11"){
      console.log("İsim ve tckn problemsiz girildi.");

    }else{
      console.log("Lütfen T.C nizi 11 karakter olarak giriniz.");

    }

  }else{
    console.log("Lütfen isim alanını boş bırakmayın");
  }

}


// beden kitle endeksi hesaplama

let kilo=Number(prompt("kilonuzu giriniz."));
let boy=Number(prompt("boyunuzu giriniz: "));

let sonuc=kilo/(boy*2);

if(sonuc<18.5){
    console.log("ideal kilonun altındasınız.");
}else if(sonuc>=18.5 && sonuc<=24.9){
  console.log("ideal kilonun altındasınız.");
}else if(sonuc>=25 && sonuc<=29.9){
  console.log("ideal kilodasınız.");
}else if (sonuc>=30 && sonuc<=39.9){
  console.log("ideal kilonun üstündesiniz.");
}else if(sonuc>=40){
  console.log("obez.");
}
 /*
 1-Dizel:24.53
 2-Benzin:22.23
 3-LPG:11.1
  Gelen müşteriden alacagımız bilgiler:
  1-yakıt tipi
  2-yüklecek yakıt litresi
*/
let dizel=24.53 , benzin=22.25  , lpg=11.1;
const yenisatır= "\r\n";

const yakıtmetni="1-Dizel"+yenisatır
+ 2-"Benzin" +yenisatır
+ 3-"LPG" + yenisatır
+"Yakıt Türünüzü seçiniz.";

let tip=prompt(yakıtmetni);
if(tip=="1" || tip=="2" || tip=="3"){
let miktar=Number(prompt("Yakıt miktarını giriniz."));
let bakiye=Number(prompt("bakiyenizi giriniz."));

if(tip=="1"){
   let odenecektutar=dizel*miktar;
   if(odenecektutar<bakiye){
    console.log("yakıt alma işlemi başarılı."+yenisatır
      +"kalan bakiye:"+(bakiye-odenecektutar));
    
   }else{
    prompt("bakiyeniz yetersiz"+yenisatır+
      "ödenecek tutar:"+odenecektutar+ yenisatır+ "bakiye:" +bakiye+yenisatır
    +"eksi tutar :"+(odenecektutar-bakiye));

   }
}else if(tip=="2"){
  let odenecektutar=benzin*miktar;
   if(odenecektutar<bakiye){
    console.log("yakıt alma işlemi başarılı."+yenisatır
      +"kalan bakiye:"+(bakiye-odenecektutar));
    
   }else{
    prompt("bakiyeniz yetersiz"+yenisatır+
      "ödenecek tutar:"+odenecektutar+ yenisatır+ "bakiye:" +bakiye+yenisatır
    +"eksi tutar :"+(odenecektutar-bakiye));

   }

}else if(tip="3"){
  let odenecektutar=lpg*miktar;
   if(odenecektutar<bakiye){
    console.log("yakıt alma işlemi başarılı."+yenisatır
      +"kalan bakiye:"+(bakiye-odenecektutar));
    
   }else{
    prompt("bakiyeniz yetersiz"+yenisatır+
      "ödenecek tutar:"+odenecektutar+ yenisatır+ "bakiye:" +bakiye+yenisatır
    +"eksi tutar :"+(odenecektutar-bakiye));

   }
  }
}else{
  alert("Lütfen geçerli bir  yakıt türü  giriniz.");
}


