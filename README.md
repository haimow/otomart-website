# OtoMart - Profesyonel Otomat Tanıtım Web Sitesi

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0-blue)

Türkiye'de otomat hizmetleri sunan şirketler için tasarlanmış, profesyonel ve kurumsal web sitesi. Responsive tasarım, Google Maps entegrasyonu ve modern UI ile müşterileriniz ile iletişim kurun.

## 🌟 Özellikler

- ✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Google Maps Entegrasyonu** - İnteraktif harita ile lokasyonları gösteriniz
- ✅ **Profesyonel UI/UX** - Modern tasarım ve smooth animasyonlar
- ✅ **Hızlı Yükleme** - CDN ve optimizasyon ile blazing fast
- ✅ **SEO Friendly** - Arama motorları için optimize edilmiş
- ✅ **Mobil Menü** - Hamburger menü ile mobil uyumlu navigasyon
- ✅ **İletişim Formu** - Müşterilerinizden mesaj alın

## 📑 Sayfalar ve Bölümler

| Bölüm | Açıklama |
|-------|----------|
| **Anasayfa** | Şirket tanıtımı ve CTA (Harita görüntüleme) |
| **Hizmetler** | İçecek, Snack, Kahve Otomatları ve Teknik Destek |
| **Galeri** | 6 modern otomat fotoğrafı ve açıklamaları |
| **Lokasyonlar** | Google Maps + 4 şube lokasyonu (İstanbul, Ankara, İzmir, Düzce) |
| **İletişim** | İletişim bilgileri ve mesaj formu |

## 🎨 Tasarım Özellikleri

- **Renk Paleti**: Profesyonel Mavi (#1e40af) ve Gri tonları
- **Font**: Segoe UI (Modern ve okunması kolay)
- **Responsive Breakpoints**: 
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

## 🚀 Hızlı Başlangıç

### Yerel Geliştirme

```bash
# Repository'yi klonla
git clone https://github.com/[kullanıcı-adı]/otomart-website.git

# Dizine gir
cd otomart-website

# index.html'i tarayıcında aç
# macOS:
open index.html

# Windows:
start index.html

# Linux:
xdg-open index.html
```

### Netlify ile Dağıtım

1. [Netlify.com](https://netlify.com) adresine git
2. GitHub hesabınla kaydol
3. "New site from Git" seçin
4. Bu repository'yi bağlayın
5. **Deploy** butonuna basın

**Saatınızda canlı olur!** ⚡

### Vercel ile Dağıtım

1. [Vercel.com](https://vercel.com) adresine git
2. GitHub ile kaydol
3. Repository'yi seçin
4. Deploy edin

### GitHub Pages ile Dağıtım

1. Repository Settings'e git
2. Pages sekmesine git
3. "main" branch'ini seç
4. Sayfanız canlı olur: `https://[kullanıcı].github.io/otomart-website/`

## 📁 Dosya Yapısı

```
otomart-website/
├── index.html              # Ana HTML dosyası
├── styles.css              # Tüm CSS tasarımları
├── script.js               # JavaScript işlevselliği
├── netlify.toml            # Netlify konfigürasyonu
├── .gitignore              # Git ignore dosyası
├── README.md               # Bu dosya
└── DEPLOYMENT_GUIDE_TR.md  # Türkçe dağıtım rehberi
```

## ⚙️ Yapılandırma

### Google Maps API Anahtarı

1. [Google Cloud Console](https://console.cloud.google.com) git
2. Yeni proje oluştur
3. Maps JavaScript API'sini etkinleştir
4. API anahtarı oluştur
5. `index.html` dosyasında bu satırı bul:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

`YOUR_API_KEY` yerine kendi anahtarınızı yapıştırın.

### Lokasyonları Özelleştirme

`script.js` dosyasında `locations` objesini düzenleyin:

```javascript
const locations = {
    Istanbul: {
        lat: 41.0082,
        lng: 28.9784,
        name: 'İstanbul Şubesi',
        address: 'Şişli, İstanbul',
        phone: '+90 (212) 123-4567'
    },
    // Yeni lokasyon eklemek için:
    Bursa: {
        lat: 40.1959,
        lng: 29.1661,
        name: 'Bursa Şubesi',
        address: 'Osmangazi, Bursa',
        phone: '+90 (224) 999-9999'
    }
};
```

### Renkleri Değiştirme

`styles.css` dosyasında CSS variables'ı düzenleyin:

```css
:root {
    --primary-color: #1e40af;      /* Mavi */
    --secondary-color: #3b82f6;    /* Açık mavi */
    --accent-color: #0f172a;       /* Koyu mavi */
    --light-bg: #f8fafc;           /* Açık gri */
    --text-color: #1e293b;         /* Koyu gri */
}
```

## 📱 Responsive Tasarım

Tasarım üç temel cihaz türü için optimize edilmiştir:

- **Desktop** (1200px+): Full grid layout
- **Tablet** (768px - 1199px): Flexible grid
- **Mobile** (< 768px): Single column + hamburger menü

Tüm medya sorguları `styles.css` dosyasının sonunda bulunur.

## 🔧 Teknoloji Stack'i

- **HTML5** - Semantic markup
- **CSS3** - Responsive design, Grid, Flexbox
- **JavaScript (Vanilla)** - No framework, lightweight
- **Google Maps API** - Lokasyon gösterimi
- **Unsplash Images** - Galeri resimleri (ücretsiz)

## 📊 Performans

- ⚡ **Sayfa Yükleme**: < 2 saniye
- 📱 **Mobile Friendly**: 100% responsive
- 🔒 **HTTPS**: Tüm hosting hizmetlerinde standart
- 🌍 **CDN**: Netlify/Vercel aracılığıyla global

## 🛠️ Geliştirme

Projeyi geliştirmek için:

```bash
# HTML dosyasını düzenle
nano index.html

# CSS tasarımlarını güncelle
nano styles.css

# JavaScript işlevselliğini değiştir
nano script.js

# Değişiklikleri commit et
git add .
git commit -m "Açıklayıcı mesaj"
git push origin main
```

## 🤝 Katkı

Proje geliştirmeler için:

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## ✉️ İletişim

- **Email**: info@otomart.com
- **Telefon**: +90 (380) 456-7890
- **Adres**: Merkez, Düzce, Türkiye

## 🎯 Gelecek Planlar

- [ ] Blog/Haber sayfası ekleme
- [ ] Dinamik galeri sistemi
- [ ] Email gönderme entegrasyonu
- [ ] Sosyal medya linkleri
- [ ] Google Analytics entegrasyonu
- [ ] Çok dilli destek (EN, DE)
- [ ] Admin panel (opsiyonel)

## 📸 Screenshot'lar

Sitenizin ekran görüntüleri ekleyebilirsiniz:

```markdown
### Anasayfa
![Anasayfa](https://via.placeholder.com/800x400)

### Lokasyonlar
![Lokasyonlar](https://via.placeholder.com/800x400)
```

## 🐛 Bug Reporting

Bir bug bulduysanız, [GitHub Issues](../../issues) üzerinden rapor edin.

## 📚 Kaynaklar

- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript
- [Google Maps API Docs](https://developers.google.com/maps/documentation)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

---

**Made with ❤️ for OtoMart**

*Son güncelleme: Nisan 2024*
