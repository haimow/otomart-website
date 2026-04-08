# OtoMart Web Sitesi - Dağıtım Rehberi

Bu rehber, maliyetsiz hosting hizmetleri kullanarak web sitenizi yayına almak için adım adım talimatlar içerir.

---

## 📋 İçerik

1. [Dosya Yapısı](#dosya-yapısı)
2. [Netlify ile Dağıtım](#netlify-ile-dağıtım)
3. [Vercel ile Dağıtım](#vercel-ile-dağıtım)
4. [GitHub Pages ile Dağıtım](#github-pages-ile-dağıtım)
5. [Önerilendikler](#önerilendikler)
6. [Sorun Giderme](#sorun-giderme)

---

## Dosya Yapısı

```
otomart-website/
├── index.html        (Ana HTML dosyası)
├── styles.css        (CSS tasarım dosyası)
├── script.js         (JavaScript işlevsellik)
└── README.md         (Bu dosya)
```

---

## Netlify ile Dağıtım (ÖNERİLEN - En Kolay)

### Adım 1: Netlify Hesabı Oluştur
1. https://www.netlify.com adresine git
2. "Sign up" (Kaydol) butonuna tıkla
3. GitHub, GitLab veya Google hesabınla kaydol (En kolay yöntem)

### Adım 2: Projenizi GitHub'a Yükle
1. https://github.com adresine git (yoksa hesap aç)
2. Yeni repository oluştur: "otomart-website" adında
3. Dosyaları yükle (index.html, styles.css, script.js)

### Adım 3: Netlify'de Bağlantı Kur
1. Netlify'de "New site from Git" butonuna tıkla
2. GitHub'ı seç
3. "otomart-website" repository'sini seç
4. Deploy ayarları:
   - **Build command**: (boş bırak - gerekli değil)
   - **Publish directory**: (boş bırak - veya `.` yaz)
5. "Deploy site" butonuna tıkla

### Adım 4: Sitenizin Yayınlanması
- Netlify otomatik olarak bir URL oluşturacak (örn: `https://otomart-xyz.netlify.app`)
- Sayfanız canlı olur ve erişime açılır

### Netlify ile Cloudflare Entegrasyonu
1. Netlify'de DNS ayarlarına git
2. Custom domain ekle (isteğe bağlı)
3. Cloudflare'de DNS ayarlarını güncelle

---

## Vercel ile Dağıtım

### Adım 1: Vercel Hesabı Oluştur
1. https://vercel.com adresine git
2. GitHub hesabınla kaydol

### Adım 2: Repository GitHub'a Yükle
1. GitHub'da "otomart-website" adında yeni repository oluştur
2. Dosyaları yükle

### Adım 3: Vercel'de Projeyi Bağla
1. Vercel'de "New Project" butonuna tıkla
2. GitHub repository'sini seç
3. "Import" butonuna tıkla
4. "Deploy" butonuna tıkla

### Adım 4: Yayın
- Vercel otomatik olarak URL oluşturur
- Siteniz canlı olur: `https://otomart-xyz.vercel.app`

---

## GitHub Pages ile Dağıtım

### Adım 1: Repository Oluştur
1. https://github.com/new adresine git
2. Repository adı: `otomart-website`
3. "Public" seçini (önemli!)
4. "Create repository" butonuna tıkla

### Adım 2: Dosyaları Yükle
1. GitHub repository'sinde "Upload files" butonuna tıkla
2. index.html, styles.css, script.js'i yükle
3. "Commit changes" butonuna tıkla

### Adım 3: GitHub Pages Ayarını Aç
1. Repository "Settings" (Ayarlar) sekmesine git
2. Sol menüden "Pages" seçini
3. "Source" bölümünde "main" branch'ini seç
4. "Save" butonuna tıkla

### Adım 4: Siteniz Yayında
- URL: `https://[kullanıcı-adınız].github.io/otomart-website/`
- Birkaç dakika sonra erişime açılır

---

## Cloudflare Pages ile Dağıtım

### Adım 1: Cloudflare Hesabı Oluştur
1. https://www.cloudflare.com adresine git
2. Kaydol

### Adım 2: GitHub Bağlantısı
1. Cloudflare'de "Pages" sekmesine git
2. "Create a project" butonuna tıkla
3. GitHub'ı seç ve bağla

### Adım 3: Repository Seç
1. "otomart-website" repository'sini seç
2. Deploy ayarları yapılandır
3. "Save and deploy" butonuna tıkla

### Adım 4: Yayın
- Cloudflare otomatik olarak URL oluşturur
- Siteniz canlı olur

---

## Önerilendikler

### 1. Netlify (TAVSIYE EDİLEN)
✅ Avantajlar:
- En kolay kurulum
- Otomatik HTTPS
- GitHub entegrasyonu mükemmel
- Ücretsiz sürümü yeterli
- Site yüksek hızlı CDN
- Form işleme özelliği var

❌ Dezavantajlar:
- Basit siteler için overkill gibi görülebilir

### 2. Vercel
✅ Avantajlar:
- Çok hızlı
- Next.js desteği
- Otomatik deployment
- Çocuk sahibi firmaları tarafından yönetilir

❌ Dezavantajlar:
- Netlify'den biraz daha karmaşık

### 3. GitHub Pages
✅ Avantajlar:
- Tamamen ücretsiz
- Basit ve direkt
- GitHub ile doğru entegre

❌ Dezavantajler:
- URL daha uzun olabilir
- Kişisel projeler için daha uygun

---

## Sorun Giderme

### Problem: Harita görünmüyor
**Çözüm:** Google Maps API anahtarını kontrol edin
- index.html'de bu satırı bulun:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDVNLmtqGhqGvLhCN_eqMqOWCJZKPkTcQ"></script>
```
- Google Cloud Console'da yeni API anahtarı oluşturun
- Anahtarı yukarıdaki `key=` parametresine yapıştırın

### Problem: Tasarım bozuk görünüyor
**Çözüm:** CSS dosyasının yüklendiğinden emin olun
- Tarayıcının "DevTools"unda (F12) "Console" sekmesine bakın
- CSS dosyası yüklenmemişse, dosya adlarını kontrol edin

### Problem: Mobil menü çalışmıyor
**Çözüm:** JavaScript'in yüklendiğini kontrol edin
- script.js dosyasının index.html'de referans edilip edilmediğini kontrol edin
- Tarayıcı konsolunda hata var mı kontrol edin

### Problem: İletişim formu çalışmıyor
**Çözüm:** Netlify'de form işlemeyi etkinleştirin
1. Netlify dashboard'una git
2. Siteni seç
3. "Forms" sekmesine git
4. HTML dosyasında form işlemesini etkinleştir

---

## Sitenizi Özelleştirme

### Logo ve İsim Değiştirme
**index.html**'de bu satırı bulun:
```html
<div class="logo">OtoMart</div>
```
`OtoMart` yerine şirketinizin adını yazın

### Renkler Değiştirme
**styles.css**'de bu kısımı bulun:
```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #3b82f6;
    --accent-color: #0f172a;
}
```
Renkleri değiştirmek için hex kodlarını güncelleyin

### Lokasyonlar Ekleme
**script.js**'de bu kısımı bulun:
```javascript
const locations = {
    Istanbul: {
        lat: 41.0082,
        lng: 28.9784,
        // ...
    }
}
```
Yeni lokasyonlar eklemek için bu formatı kullanın

### İletişim Bilgileri
**index.html**'de Contact sekmesine git ve bilgileri güncelle

---

## Gelecekteki İyileştirmeler

- [ ] Analitik ekleme (Google Analytics)
- [ ] SEO optimizasyonu
- [ ] Blog sayfası ekleme
- [ ] Email gönderme entegrasyonu
- [ ] Sosyal medya entegrasyonu
- [ ] Dinamik galeri resim yükleme sistemi

---

## Destek ve Sorular

Herhangi bir sorunuz veya soru varsa:
- Google "Netlify deployment" için yardım alın
- YouTube'da "Netlify tutorial" videolarına bakın
- Cloudflare desteğinden yardım isteyin

---

## Lisans ve Haklar

Bu web sitesi taslak çalışması olarak sağlanmıştır. 
Dilediğiniz gibi özelleştirebilir ve kullanabilirsiniz.

**Son güncelleme:** Nisan 2024
