import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm ${props.className || ''}`}>
      © 2026-2099 干货大师
    </div>
  )
}
