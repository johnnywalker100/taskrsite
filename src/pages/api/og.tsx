import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#4ade80',
            opacity: 0.15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: '#22c55e',
            opacity: 0.1,
          }}
        />

        {/* Logo */}
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4ade80, #22c55e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '64px', color: 'white' }}>✓</span>
        </div>

        {/* App Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '16px',
          }}
        >
          taskr
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '24px',
          }}
        >
          Screen Time That Actually Enforces Chores
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '22px',
            color: '#6b7280',
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Link chores to Screen Time. When tasks go overdue,</span>
          <span>apps are blocked until kids submit photo proof.</span>
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: '32px',
            background: '#1a1a1a',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '24px',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Built for iOS families
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

