import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const src = '.output/public/404/index.html'
const dest = '.output/public/404.html'

if (!existsSync(src)) {
  console.error(`❌ Missing ${src}`)
  console.error(
    '   Ensure /404 route exists and SSG build completed successfully.',
  )
  process.exit(1)
}

// Ensure .output/public directory exists
mkdirSync(dirname(dest), { recursive: true })
copyFileSync(src, dest)

console.log(`✅ Copied ${src} -> ${dest}`)
