# GitHub Configuration Rehberi

Bu rehberde, OtoMart web sitenizi GitHub'a yüklemek ve yapılandırmak için adım adım talimatlar bulunur.

---

## 📋 İçerik

1. [Ön Koşullar](#ön-koşullar)
2. [GitHub Hesabı ve Repository](#github-hesabı-ve-repository)
3. [Dosyaları Yükleme](#dosyaları-yükleme)
4. [Configuration Dosyaları](#configuration-dosyaları)
5. [Netlify Dağıtımı](#netlify-dağıtımı)
6. [GitHub Settings](#github-settings)
7. [Troubleshooting](#troubleshooting)

---

## Ön Koşullar

### Gereken Yazılımlar:
- ✅ Web Tarayıcısı (Chrome, Firefox, Safari)
- ✅ Git (Opsiyonel - Web arayüzü ile de yapılabilir)
- ✅ GitHub Hesabı (Ücretsiz)

### Gereken Dosyalar:
```
otomart-website/
├── index.html
├── styles.css
├── script.js
├── README.md
├── netlify.toml
├── .gitignore
└── DEPLOYMENT_GUIDE_TR.md
```

---

## GitHub Hesabı ve Repository

### Adım 1: GitHub Hesabı Oluştur (Yoksa)

1. https://github.com/signup adresine git
2. E-posta, şifre ve kullanıcı adı gir
3. Doğrulama adımlarını tamamla
4. Kaydol

### Adım 2: Yeni Repository Oluştur

1. https://github.com/new adresine git (veya GitHub anasayfada "+" butonuna tıkla)
2. **Repository name** alanına yazın: `otomart-website`
3. **Description** (İsteğe bağlı): `Profesyonel otomat tanıtım web sitesi`
4. **Public** seçeneğini işaretle ✅
5. **Initialize this repository with a README** seçeneğini **işaretleme** ❌ (Biz zaten README hazırladık)
6. **Create repository** butonuna tıkla

### Adım 3: Clone URL'sini Kopyala

Repository oluşturduktan sonra:
1. **Code** butonuna tıkla (Yeşil düğme)
2. **HTTPS** sekmesini seç
3. URL'yi kopyala (örn: `https://github.com/[kullanıcı-adı]/otomart-website.git`)

---

## Dosyaları Yükleme

### Seçenek 1: Web Arayüzü (Kolay - Önerilen)

1. Repository'nin ana sayfasına git
2. **Upload files** butonuna tıkla (yeşil "Code" düğmesinin yanında)
3. Dosyaları sürükle-bırak yaparak yükle:
   - index.html
   - styles.css
   - script.js
   - README.md
   - netlify.toml
   - .gitignore
4. En altta **Commit changes** butonuna tıkla
5. **Commit message** yazı: "Initial commit: Add website files"
6. **Commit changes** butonuna tıkla

### Seçenek 2: Git CLI (Gelişmiş)

Terminal/Command Prompt'ta:

```bash
# Git'i indir ve kur (https://git-scm.com)

# Dizine git
cd ~/Desktop/otomart-website

# Git repository'sini başlat
git init

# Tüm dosyaları ekle
git add .

# Commit et
git commit -m "Initial commit: Add website files"

# Repository adresini ekle (clone URL'den kopyladığın)
git remote add origin https://github.com/[kullanıcı-adı]/otomart-website.git

# main branch'e push et
git branch -M main
git push -u origin main
```

---

## Configuration Dosyaları

Tüm configuration dosyaları hazır bir şekilde sağlanmıştır:

### README.md
- Proje tanıtımı
- Özellikler listesi
- Hızlı başlangıç rehberi
- Teknoloji stack'i
- Katkı talimatları

**Konumu:** Repository root'unda
**Amaç:** GitHub sayfasında otomatik gösterilir

### netlify.toml
- Netlify deployment ayarları
- Cache kontrol
- Güvenlik başlıkları
- Form işlemeleri

**Konumu:** Repository root'unda
**Amaç:** Netlify'nin otomatik olarak okuyacağı

### .gitignore
- Ignore edilecek dosyalar
- Node modules
- OS dosyaları
- IDE ayarları

**Konumu:** Repository root'unda
**Amaç:** Gereksiz dosyaların repo'ya eklenmesini engeller

---

## Netlify Dağıtımı

### Adım 1: Netlify Hesabı Oluştur

1. https://app.netlify.com/signup adresine git
2. **GitHub ile kaydol** seçeneğini tıkla
3. GitHub hesabınla doğrulama yap
4. Netlify'ye erişim izni ver

### Adım 2: Repository'yi Bağla

1. Netlify dashboard'unda **New site from Git** butonuna tıkla
2. **GitHub** seçini
3. `otomart-website` repository'sini ara ve seç
4. Deploy ayarları:
   - **Build command:** (Boş bırak)
   - **Publish directory:** `.` (veya boş)
5. **Deploy site** butonuna tıkla

### Adım 3: Dağıtımı Bekle

- Netlify otomatik olarak sitenizi derleyecek
- ~ 1-2 dakika bekle
- Deployment tamamlandığında e-posta alacaksın
- Siteniz canlı olur! 🎉

**URL örneği:** `https://otomart-xyz.netlify.app`

### Adım 4: Site Adını Değiştir (İsteğe bağlı)

1. Netlify'de site ayarlarına git
2. **Site settings** → **Change site name**
3. Yeni ad gir (örn: `otomart-turkey`)
4. Kaydet

---

## GitHub Settings

### Genel Ayarlar

1. Repository'ye git
2. **Settings** sekmesine tıkla
3. Aşağıdaki ayarları kontrol et:

#### Temel Ayarlar
- **Repository name:** `otomart-website` ✅
- **Description:** Ekle ve açıkla
- **Public** seçili olmalı ✅

#### Branch Protection (İsteğe bağlı)

1. **Branches** sekmesine git
2. **Add rule** butonuna tıkla
3. Branch pattern: `main`
4. Pull request review gerektir (opsiyonel)
5. Save

#### Pages (GitHub Pages'i Etkinleştirmek İçin)

1. **Pages** sekmesine git
2. **Source** → **Deploy from a branch** seç
3. **Branch** → `main` seç
4. **Save** butonuna tıkla

**GitHub Pages URL:** `https://[kullanıcı-adı].github.io/otomart-website/`

#### Secrets (İsteğe bağlı - İleri Seviye)

API anahtarları gibi hassas bilgileri saklama:

1. **Secrets and variables** → **Actions** seç
2. **New repository secret** butonuna tıkla
3. Name: `GOOGLE_MAPS_API_KEY`
4. Value: API anahtarınız
5. Add secret

Sonra index.html'de kullanabilirsiniz (Actions ile otomatize etmek için)

---

## Best Practices

### 1. Commit İletileri

İyi yazılmış commit iletileri:

```
✅ İyi:
- "Add Google Maps integration"
- "Fix mobile menu bug"
- "Update contact form styles"

❌ Kötü:
- "update"
- "fix"
- "asd"
```

### 2. Branch Yönetimi

Daha büyük projeler için:

```bash
# Feature branch oluştur
git checkout -b feature/new-feature

# Değişiklikleri yap ve commit et
git add .
git commit -m "Add new feature"

# Push et
git push origin feature/new-feature

# Pull Request aç (GitHub web arayüzünde)
```

### 3. Regular Updates

Her değişiklikten sonra:

```bash
git add .
git commit -m "Açıklayıcı mesaj"
git push origin main
```

---

## Netlify.toml Açıklaması

```toml
[build]
  command = ""          # Build komutu (bu sitede gerekli değil)
  publish = "."         # Yayınlanacak dizin (kök dizin)

[[redirects]]           # Tüm istekleri index.html'e yönlendir
  from = "/*"
  to = "/"
  status = 200

[[headers]]             # Cache ayarları
  for = "/styles.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

---

## Troubleshooting

### Problem: Netlify sitesi görünmüyor
**Çözüm:**
1. Netlify deployment loglarını kontrol et
2. Build hataları varsa düzelt
3. netlify.toml dosyasını kontrol et
4. index.html dosyasının kök dizinde olduğundan emin ol

### Problem: GitHub dosyaları görünmüyor
**Çözüm:**
1. Dosyaları yeni sekmede yükle
2. Sayfayı yenile (Ctrl+Shift+R)
3. .gitignore kurallarını kontrol et

### Problem: CSS/JS yüklenmiyor
**Çözüm:**
1. Dosya adlarının doğru olduğundan emin ol
2. Tarayıcı cache'ini temizle
3. DevTools'u aç (F12) ve console hatalarını kontrol et

### Problem: Google Maps çalışmıyor
**Çözüm:**
1. API anahtarı doğru mu?
2. API'nin etkinleştirilip etkinleştirilmediğini kontrol et
3. index.html'de script tag'ını kontrol et

---

## Güvenlik Kontrol Listesi

- [ ] `.gitignore` dosyası mevcut mi?
- [ ] API anahtarları `.gitignore`'a eklendi mi?
- [ ] Şifre veya gizli bilgi commit edilmedi mi?
- [ ] HTTPS aktif mi (Netlify otomatik yapar)?
- [ ] Güvenlik başlıkları ayarlandı mı?

---

## İleri Seviye (Opsiyonel)

### GitHub Actions ile CI/CD

`.github/workflows/deploy.yml` dosyası oluştur:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: '.'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Environment Variables

Production ve development için farklı ayarlar kullan.

---

## Kaynaklar

- [GitHub Docs](https://docs.github.com)
- [Netlify Documentation](https://docs.netlify.com)
- [Git Tutorial](https://git-scm.com/doc)
- [TOML Format](https://toml.io)

---

**Başarılı Deployments için İyi Şanslar! 🚀**
