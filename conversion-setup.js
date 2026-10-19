// Konfigurasi Pelacakan Konversi & Meta Pixel BSV10 untuk MassGacorrr
window.BannerConversion = Object.freeze({
  // 1. Meta Pixel ID (Facebook & Instagram Ads)
  metaPixelId: '2575405732923924',
  metaPixelEnabled: true,
  viewContentEnabled: true,
  viewContentValue: 100,

  // 2. Kontrol Sumber Lead Tracking (KHUSUS BANNER SAJA)
  leadEnabled: true,
  bannerLeadEnabled: true,   // AKTIF: Klik dari Banner CTA DIHITUNG LEAD
  pageLeadEnabled: false,    // NONAKTIF: Klik tombol di dalam halaman TIDAK dihitung Lead
  leadValue: 1000,
  currency: 'IDR',

  // 3. Google Ads (Opsional - Kosongkan jika hanya menggunakan Meta Ads)
  googleAdsId: '',
  bannerConversionLabel: '',    // Label konversi Google Ads khusus klik Banner
  pageConversionLabel: '',
  googleAdsConversionLabel: ''
});
