import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  // Cấu hình dark mode bằng CSS class (thêm class 'dark' vào HTML element)
  darkMode: 'class',

  // Đường dẫn các file cần scan để tìm Tailwind classes
  content: [
    './pages/**/*.{ts,tsx}', // Pages directory (Next.js style)
    './components/**/*.{ts,tsx}', // Components directory
    './app/**/*.{ts,tsx}', // App directory (React Router)
    './src/**/*.{ts,tsx}' // Source directory (Vite style)
  ],

  // Prefix cho tất cả utility classes (ví dụ: 'tw-' sẽ tạo 'tw-bg-red-500')
  prefix: '',

  theme: {
    // Cấu hình container utility
    container: {
      center: true, // Tự động căn giữa container
      padding: '2rem', // Padding mặc định 32px
      screens: {
        '2xl': '1400px' // Max-width cho breakpoint 2xl
      }
    },
    extend: {
      // ===========================================
      // RESPONSIVE BREAKPOINTS - Điểm ngắt responsive
      // ===========================================
      screens: {
        xs: '475px', // Extra small - Điện thoại nhỏ
        sm: '640px', // Small - Điện thoại lớn (mặc định)
        md: '768px', // Medium - Tablet (mặc định)
        lg: '1024px', // Large - Laptop nhỏ (mặc định)
        xl: '1280px', // Extra large - Desktop (mặc định)
        '2xl': '1400px', // 2X large - Desktop lớn (custom)
        '3xl': '1600px', // 3X large - Desktop rất lớn
        '4xl': '1920px', // 4X large - Monitor 1080p+
        // Custom breakpoints với tên có ý nghĩa
        mobile: '320px', // Mobile cơ bản
        tablet: '768px', // Tablet portrait
        laptop: '1024px', // Laptop/Desktop nhỏ
        desktop: '1280px' // Desktop chuẩn
      },

      // ===========================================
      // COLOR SYSTEM - Hệ thống màu sắc
      // ===========================================
      colors: {
        // Base colors - Màu cơ bản từ CSS variables
        border: 'hsl(var(--border))', // Màu viền
        input: 'hsl(var(--input))', // Màu input field
        ring: 'hsl(var(--ring))', // Màu focus ring
        background: 'hsl(var(--background))', // Màu nền chính
        foreground: 'hsl(var(--foreground))', // Màu text chính

        // Primary colors - Màu chính của brand
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Màu chính (bg-primary)
          foreground: 'hsl(var(--primary-foreground))', // Text trên nền primary
          glow: 'hsl(var(--primary-glow))' // Hiệu ứng glow (custom)
        },

        // Secondary colors - Màu phụ
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Màu phụ (bg-secondary)
          foreground: 'hsl(var(--secondary-foreground))' // Text trên nền secondary
        },

        // Destructive colors - Màu nguy hiểm/xóa
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Màu đỏ nguy hiểm
          foreground: 'hsl(var(--destructive-foreground))' // Text trên nền destructive
        },

        // Muted colors - Màu nhạt/tắt
        muted: {
          DEFAULT: 'hsl(var(--muted))', // Màu nền nhạt
          foreground: 'hsl(var(--muted-foreground))' // Text màu xám nhạt
        },

        // Accent colors - Màu nhấn/highlight
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Màu nhấn
          foreground: 'hsl(var(--accent-foreground))' // Text trên nền accent
        },

        // Popover colors - Màu cho tooltip/dropdown
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Nền popover
          foreground: 'hsl(var(--popover-foreground))' // Text trong popover
        },

        // Card colors - Màu cho card component
        card: {
          DEFAULT: 'hsl(var(--card))', // Nền card
          foreground: 'hsl(var(--card-foreground))' // Text trong card
        },

        // Sidebar colors - Hệ màu riêng cho sidebar
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))', // Nền sidebar
          foreground: 'hsl(var(--sidebar-foreground))', // Text sidebar
          primary: 'hsl(var(--sidebar-primary))', // Primary trong sidebar
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))', // Text trên primary sidebar
          accent: 'hsl(var(--sidebar-accent))', // Accent trong sidebar
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))', // Text trên accent sidebar
          border: 'hsl(var(--sidebar-border))', // Viền sidebar
          ring: 'hsl(var(--sidebar-ring))' // Focus ring sidebar
        },

        // Brand colors - Màu thương hiệu tùy chỉnh
        brand: {
          50: '#eff6ff', // Màu brand rất nhạt
          100: '#dbeafe', // Màu brand nhạt
          200: '#bfdbfe', // Màu brand light
          300: '#93c5fd', // Màu brand medium-light
          400: '#60a5fa', // Màu brand medium
          500: '#3b82f6', // Màu brand chính (DEFAULT)
          600: '#2563eb', // Màu brand đậm
          700: '#1d4ed8', // Màu brand rất đậm
          800: '#1e40af', // Màu brand dark
          900: '#1e3a8a', // Màu brand darkest
          950: '#1e293b' // Màu brand black
        },

        // Status colors - Màu trạng thái
        success: {
          DEFAULT: '#10b981', // Màu xanh lá thành công
          light: '#6ee7b7', // Xanh lá nhạt
          dark: '#047857' // Xanh lá đậm
        },
        warning: {
          DEFAULT: '#f59e0b', // Màu vàng cảnh báo
          light: '#fcd34d', // Vàng nhạt
          dark: '#d97706' // Vàng đậm
        },
        error: {
          DEFAULT: '#ef4444', // Màu đỏ lỗi
          light: '#fca5a5', // Đỏ nhạt
          dark: '#dc2626' // Đỏ đậm
        },
        info: {
          DEFAULT: '#3b82f6', // Màu xanh dương thông tin
          light: '#93c5fd', // Xanh dương nhạt
          dark: '#1d4ed8' // Xanh dương đậm
        }
      },

      // ===========================================
      // TYPOGRAPHY - Hệ thống typography
      // ===========================================
      fontFamily: {
        // System fonts - Không cần cài đặt, sử dụng fonts có sẵn trên hệ thống
        // sans: [
        //   '-apple-system', // macOS San Francisco
        //   'BlinkMacSystemFont', // macOS San Francisco fallback
        //   'Segoe UI', // Windows 10/11
        //   'Roboto', // Android
        //   'Oxygen', // KDE
        //   'Ubuntu', // Ubuntu
        //   'Cantarell', // GNOME
        //   'Helvetica Neue', // macOS Helvetica
        //   'Arial', // Cross-platform fallback
        //   'sans-serif' // Generic fallback
        // ],
        // mono: [
        //   'SFMono-Regular', // macOS/iOS monospace
        //   'Consolas', // Windows monospace
        //   'Liberation Mono', // Linux monospace
        //   'Menlo', // macOS legacy
        //   'Courier New', // Cross-platform fallback
        //   'monospace' // Generic fallback
        // ],
        // heading: [
        //   '-apple-system', // Sử dụng system font cho headings
        //   'BlinkMacSystemFont',
        //   'Segoe UI',
        //   'Roboto',
        //   'Arial',
        //   'sans-serif'
        // ]

        // Google Fonts đã cài: Lobster + Inter
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Font chính - Inter
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace'
        ], // System monospace fonts
        heading: ['Lobster', 'Inter', 'cursive', 'sans-serif'], // Font tiêu đề - Lobster (decorative)
        display: ['Lobster', 'cursive'] // Font display đặc biệt cho hero text
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }], // 10px - Text rất nhỏ
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px - Text nhỏ (mặc định)
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px - Text medium (mặc định)
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px - Text chuẩn (mặc định)
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px - Text lớn (mặc định)
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px - Text XL (mặc định)
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px - Text 2XL (mặc định)
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px - Heading medium
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px - Heading lớn
        '5xl': ['3rem', { lineHeight: '3.5rem' }], // 48px - Heading rất lớn
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px - Heading khổng lồ (mặc định)
        '7xl': ['4.5rem', { lineHeight: '1' }], // 72px - Display text (mặc định)
        '8xl': ['6rem', { lineHeight: '1' }], // 96px - Hero text (mặc định)
        '9xl': ['8rem', { lineHeight: '1' }] // 128px - Mega text (mặc định)
      },
      fontWeight: {
        thin: '100', // Font rất mỏng
        extralight: '200', // Font cực nhẹ
        light: '300', // Font nhẹ
        normal: '400', // Font bình thường (mặc định)
        medium: '500', // Font trung bình
        semibold: '600', // Font hơi đậm
        bold: '700', // Font đậm (mặc định)
        extrabold: '800', // Font cực đậm
        black: '900' // Font đen
      },

      // ===========================================
      // SPACING SYSTEM - Hệ thống khoảng cách
      // ===========================================
      spacing: {
        13: '3.25rem', // 52px - Custom spacing
        15: '3.75rem', // 60px - Header height
        17: '4.25rem', // 68px - Large component height
        18: '4.5rem', // 72px - Button group height
        76: '19rem', // 304px - Large section
        84: '21rem', // 336px - Sidebar width
        88: '22rem', // 352px - Content area
        92: '23rem', // 368px - Large content
        100: '25rem', // 400px - Modal width
        104: '26rem', // 416px - Large modal
        112: '28rem', // 448px - XL modal
        128: '32rem' // 512px - XXL modal
      },
      maxWidth: {
        '8xl': '88rem', // 1408px - Ultra wide content
        '9xl': '96rem', // 1536px - Super wide content
        '10xl': '104rem' // 1664px - Mega wide content
      },
      minHeight: {
        '1/2': '50%', // 50% parent height
        '1/3': '33.333333%', // 33% parent height
        '2/3': '66.666667%', // 67% parent height
        '1/4': '25%', // 25% parent height
        '3/4': '75%' // 75% parent height
      },
      zIndex: {
        1: '1', // z-index thấp
        10: '10', // z-index mặc định (default)
        20: '20', // z-index cao (default)
        30: '30', // z-index rất cao (default)
        40: '40', // z-index cực cao (default)
        50: '50', // z-index header (default)
        100: '100', // z-index modal backdrop
        1000: '1000', // z-index tooltip
        9999: '9999' // z-index highest
      },

      // ===========================================
      // BORDER RADIUS - Bo góc
      // ===========================================
      borderRadius: {
        lg: 'var(--radius)', // 10px - Bo góc lớn (từ CSS variable)
        md: 'calc(var(--radius) - 2px)', // 8px - Bo góc trung bình
        sm: 'calc(var(--radius) - 4px)', // 6px - Bo góc nhỏ
        xs: '2px', // 2px - Bo góc rất nhỏ
        '2xl': '1rem', // 16px - Bo góc rất lớn
        '3xl': '1.5rem' // 24px - Bo góc khổng lồ
      },

      // ===========================================
      // BACKGROUND IMAGES - Hình nền
      // ===========================================
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)', // Gradient chính (từ CSS variable)
        'gradient-subtle': 'var(--gradient-subtle)', // Gradient nhẹ (từ CSS variable)
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Gradient tròn
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))' // Gradient hình nón
      },

      // ===========================================
      // BOX SHADOWS - Đổ bóng
      // ===========================================
      boxShadow: {
        elegant: 'var(--shadow-elegant)', // Bóng thanh lịch (từ CSS variable)
        glow: 'var(--shadow-glow)', // Bóng phát sáng (từ CSS variable)
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)', // Bóng phát sáng nhỏ
        'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)', // Bóng phát sáng trung
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)', // Bóng phát sáng lớn
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)' // Bóng bên trong
      },

      // ===========================================
      // EFFECTS & FILTERS - Hiệu ứng và bộ lọc
      // ===========================================
      backdropBlur: {
        xs: '2px', // Blur backdrop rất nhỏ
        '3xl': '64px' // Blur backdrop rất lớn
      },
      blur: {
        xs: '2px', // Blur nhỏ
        '4xl': '72px' // Blur rất lớn
      },
      dropShadow: {
        glow: '0 0 6px rgb(59 130 246 / 0.5)', // Drop shadow phát sáng
        'glow-lg': '0 0 20px rgb(59 130 246 / 0.4)' // Drop shadow phát sáng lớn
      },

      // ===========================================
      // TRANSITIONS & ANIMATIONS - Chuyển tiếp và hoạt ảnh
      // ===========================================
      transitionDuration: {
        0: '0ms', // Không có transition
        75: '75ms', // Transition rất nhanh (mặc định)
        100: '100ms', // Transition nhanh (mặc định)
        150: '150ms', // Transition bình thường (mặc định)
        200: '200ms', // Transition hơi chậm (mặc định)
        300: '300ms', // Transition chậm (mặc định)
        500: '500ms', // Transition rất chậm (mặc định)
        700: '700ms', // Transition cực chậm (mặc định)
        1000: '1000ms', // Transition 1 giây (mặc định)
        2000: '2000ms', // Transition 2 giây
        3000: '3000ms', // Transition 3 giây
        4000: '4000ms', // Transition 4 giây
        5000: '5000ms' // Transition 5 giây
      },
      transitionDelay: {
        0: '0ms', // Không delay (mặc định)
        75: '75ms', // Delay ngắn (mặc định)
        100: '100ms', // Delay bình thường (mặc định)
        150: '150ms', // Delay trung bình (mặc định)
        200: '200ms', // Delay hơi lâu (mặc định)
        300: '300ms', // Delay lâu (mặc định)
        500: '500ms', // Delay rất lâu (mặc định)
        700: '700ms', // Delay cực lâu (mặc định)
        1000: '1000ms', // Delay 1 giây (mặc định)
        2000: '2000ms' // Delay 2 giây
      },
      transitionTimingFunction: {
        smooth: 'var(--transition-smooth)', // Timing function mượt (từ CSS variable)
        bounce: 'var(--transition-bounce)', // Timing function nảy (từ CSS variable)
        'ease-in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)', // Ease in với back
        'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Ease out với back
        'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' // Ease in-out với back
      },

      // ===========================================
      // KEYFRAMES - Định nghĩa animation keyframes
      // ===========================================
      keyframes: {
        // Accordion animations - Hoạt ảnh cho Radix UI Accordion
        'accordion-down': {
          from: { height: '0' }, // Từ chiều cao 0
          to: { height: 'var(--radix-accordion-content-height)' } // Đến chiều cao content
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' }, // Từ chiều cao content
          to: { height: '0' } // Về chiều cao 0
        },

        // Loading animations - Hoạt ảnh loading
        spin: {
          from: { transform: 'rotate(0deg)' }, // Xoay từ 0 độ
          to: { transform: 'rotate(360deg)' } // Xoay đến 360 độ
        },
        pulse: {
          '0%, 100%': { opacity: '1' }, // Opacity 100% ở đầu và cuối
          '50%': { opacity: '.5' } // Opacity 50% ở giữa
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)', // Nhảy lên 25%
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)', // Về vị trí ban đầu
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },

        // Fade animations - Hoạt ảnh mờ dần
        fadeIn: {
          '0%': { opacity: '0' }, // Bắt đầu trong suốt
          '100%': { opacity: '1' } // Kết thúc hiện rõ
        },
        fadeOut: {
          '0%': { opacity: '1' }, // Bắt đầu hiện rõ
          '100%': { opacity: '0' } // Kết thúc trong suốt
        },

        // Slide animations - Hoạt ảnh trượt
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' }, // Bắt đầu từ trái 100%
          '100%': { transform: 'translateX(0)' } // Kết thúc ở vị trí gốc
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' }, // Bắt đầu từ phải 100%
          '100%': { transform: 'translateX(0)' } // Kết thúc ở vị trí gốc
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' }, // Bắt đầu từ dưới 100%
          '100%': { transform: 'translateY(0)' } // Kết thúc ở vị trí gốc
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' }, // Bắt đầu từ trên 100%
          '100%': { transform: 'translateY(0)' } // Kết thúc ở vị trí gốc
        },

        // Scale animations - Hoạt ảnh phóng to/thu nhỏ
        scaleIn: {
          '0%': { transform: 'scale(0)' }, // Bắt đầu scale 0 (ẩn)
          '100%': { transform: 'scale(1)' } // Kết thúc scale 1 (bình thường)
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' }, // Bắt đầu scale 1 (bình thường)
          '100%': { transform: 'scale(0)' } // Kết thúc scale 0 (ẩn)
        },

        // Shake animation - Hoạt ảnh lắc
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
        }
      },

      // ===========================================
      // ANIMATIONS - Áp dụng keyframes với timing
      // ===========================================
      animation: {
        // Accordion animations
        'accordion-down': 'accordion-down 0.2s ease-out', // animate-accordion-down
        'accordion-up': 'accordion-up 0.2s ease-out', // animate-accordion-up

        // Loading animations
        spin: 'spin 1s linear infinite', // animate-spin (xoay)
        'spin-slow': 'spin 3s linear infinite', // animate-spin-slow (xoay chậm)
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // animate-pulse (nhấp nháy)
        'pulse-slow': 'pulse 3s infinite', // animate-pulse-slow (nhấp nháy chậm)
        bounce: 'bounce 1s infinite', // animate-bounce (nảy)

        // Fade animations
        'fade-in': 'fadeIn 0.5s ease-out', // animate-fade-in
        'fade-out': 'fadeOut 0.5s ease-out', // animate-fade-out

        // Slide animations
        'slide-in-left': 'slideInLeft 0.3s ease-out', // animate-slide-in-left
        'slide-in-right': 'slideInRight 0.3s ease-out', // animate-slide-in-right
        'slide-in-up': 'slideInUp 0.3s ease-out', // animate-slide-in-up
        'slide-in-down': 'slideInDown 0.3s ease-out', // animate-slide-in-down

        // Scale animations
        'scale-in': 'scaleIn 0.2s ease-out', // animate-scale-in
        'scale-out': 'scaleOut 0.2s ease-out', // animate-scale-out

        // Shake animation
        shake: 'shake 0.5s ease-in-out' // animate-shake
      }
    }
  },

  // ===========================================
  // PLUGINS - Các plugin mở rộng chức năng
  // ===========================================
  plugins: [
    animate // Plugin animations cho Radix UI
    // Uncomment để thêm các plugin khác:
    // require('@tailwindcss/typography'),      // Plugin typography - prose classes
    // require('@tailwindcss/forms'),           // Plugin form styling
    // require('@tailwindcss/aspect-ratio'),    // Plugin aspect ratio utilities
    // require('@tailwindcss/container-queries'), // Plugin container queries
    // require('tailwindcss-debug-screens'),    // Plugin debug responsive breakpoints
    // require('tailwind-scrollbar')            // Plugin custom scrollbar styling
  ]
} satisfies Config
