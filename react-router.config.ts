import type { Config } from '@react-router/dev/config'

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false, // Set to `true` for server-side rendering
  appDirectory: 'src/app',
  // Explicitly specify where to generate types
  buildDirectory: 'build'
} satisfies Config
