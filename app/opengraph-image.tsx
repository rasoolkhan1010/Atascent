import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '70px', background: '#071012', color: '#fffdf7', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#c8a552', fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>ATASCENT</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 72, lineHeight: 1, fontWeight: 500 }}>Your business deserves clarity.</div>
        <div style={{ fontSize: 27, color: '#b8bfbd' }}>UAE Business Support & Financial Solutions</div>
      </div>
      <div style={{ display: 'flex', fontSize: 18, color: '#c8a552', letterSpacing: 2 }}>ACCOUNTING · AUDIT · TAX · COMPLIANCE · BUSINESS SUPPORT</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
