import React from 'react'
import {Container} from "react-bootstrap"
import Logo from "../assets/logo.svg"
export default function AboutUs() {
  return (
    <Container className="text-center mt-3">
        <h3>
            Biz Kimiz ?
        </h3>
        <p>
        1991 yılında misafirlerine en iyi hizmeti ve fiyatı sunma hedefiyle kurulan <strong>Etstur</strong>, turizm sektörünün yenilikçi temsilcisi olarak yurt içinde ve dışında paket tur ve otel konaklama hizmetleri veriyor. Marka, kuruluş yılından itibaren hızlı şekilde büyüyerek seyahat sektöründeki vizyoner yapısı ile birçok ilke imza atması ile öne çıkıyor.
Türkiye'nin önde gelen seyahat ve turizm kuruluşu olan Etstur, yurt içinde binlerce otelin satış ve pazarlamasını gerçekleştiriyor. Türkiye'de 60, yurt dışında ise yaklaşık 40 destinasyonu kapsayan yüzlerce tur paketi üreten firma, çatısı altında birçok markaya da ev sahipliği yapıyor. Etstur; geniş kitlelere hizmet veren seyahat acentesi Didimtur, kişiye özel ve lüks seyahat programları hazırlayan Jetset markası, cazip fiyatlarla uçak bileti satışı gerçekleştiren Ucuzabilet.com, misafirlerin tesislerle ilgili objektif görüşlerine yer veren Otelpuan.com, online konaklama platformu Odamax.com ve seyahat trendlerinin yer aldığı Lets Go Dergi ile turizm ve seyahat alanlarında tüketicinin yanında yer alıyor.

        </p>
        <p className="mt-5">
        Şirket Ünvanı
: Ets Ersoy Turistik Servisleri Anonim Şirketi
Vergi Dairesi ve Numarası
: Büyük Mükellefler V.D. 3810040790
Ticaret Sicil No
: Kadıköy- 23850
Tescil Tarih
: 09.07.1991
Mersis No
: 0381004079000024
Merkez
: Merdivenköy Mahallesi Nur Sokak No: 1/8 C blok Kadıköy/İSTANBUL
Yönetim Kurulu Başkanı
: Coşkun Tünay
Taahhüt Edilen Sermaye
: 200.000.000 TL
Ödenmiş Sermaye
: 200.000.000 TL
Bağımsız Denetçi
: Güreli Yeminli Mali Müşavirlik ve Bağımsız Denetim Hizmetleri A.Ş. Spine Tower Büyükdere Cad. 59. Sok No: 243 K:25-26, 34398 Maslak, Sarıyer/İstanbul
        </p>
        <img src={Logo} alt="ets logo" width={250} className="mt-5"/>
    </Container>
   
  )
}
