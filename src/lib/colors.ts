/**
 * Menghitung luminance (kecerahan) dari warna HEX atau RGB.
 * Menggunakan rumus standar W3C untuk relative luminance.
 */
export function getLuminance(color: string): number {
  let r, g, b;

  if (color.startsWith('#')) {
    // Handle HEX
    const hex = color.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (color.startsWith('rgb')) {
    // Handle RGB/RGBA
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    [r, g, b] = rgb.map(Number);
  } else {
    return 0;
  }

  // Normalisasi ke rentang 0-1
  const [rs, gs, bs] = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  // Rumus relative luminance
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Menentukan apakah background tergolong "terang" berdasarkan threshold luminance.
 * Threshold 0.5 sering digunakan, namun 0.179 adalah threshold standar WCAG untuk kontras.
 */
export function isLightBackground(color: string, threshold = 0.5): boolean {
  // Jika warna transparan atau tidak terdeteksi, anggap gelap (default untuk hero)
  if (!color || color === 'transparent' || color === 'rgba(0, 0, 0, 0)') return false;
  return getLuminance(color) > threshold;
}
