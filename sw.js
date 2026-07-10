// Service worker ขั้นต่ำ — แค่ให้ browser มองว่าเป็น PWA ที่ติดตั้งได้
// (ไม่ทำ offline caching เพราะระบบนี้ออกแบบให้ต้องมีอินเทอร์เน็ตเสมอ)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {}); // ปล่อยผ่านไปที่ network ตามปกติ
