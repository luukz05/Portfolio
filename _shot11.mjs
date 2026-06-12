import { chromium } from 'playwright-core';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:5173/Portfolio/', { waitUntil:'networkidle' });
await p.waitForTimeout(2200);
await p.evaluate(()=>{const e=document.querySelector('#sobre'); window.scrollTo(0, e.offsetTop - 30);});
await p.waitForTimeout(900);
await p.screenshot({ path: '/tmp/v7-sobre.png' });
await b.close(); console.log('ok');
