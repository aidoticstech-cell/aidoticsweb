import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-deep':   '#0D2B1E',
        'green-mid':    '#1A5C3A',
        'green-soft':   '#2E7D52',
        'green-muted':  '#4D9E72',
        'green-pale':   '#E6F2EC',
        'green-wash':   '#F2F9F5',
        'maroon-deep':  '#4A0E1A',
        'maroon-mid':   '#7B1D2E',
        'maroon-soft':  '#A63348',
        'maroon-pale':  '#F5E6EA',
        'off-white':    '#F9F6F3',
        cream:          '#F4EDE8',
        border:         '#E2DDD9',
        'text-body':    '#2C1A12',
        'text-muted':   '#7A6E68',
        whatsapp:       '#25D366',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(40px,6vw,72px)', { lineHeight: '1.1', fontWeight: '300' }],
        h2:   ['clamp(30px,4vw,50px)', { lineHeight: '1.2', fontWeight: '300' }],
        h3:   ['clamp(20px,2.5vw,30px)', { lineHeight: '1.3', fontWeight: '400' }],
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

