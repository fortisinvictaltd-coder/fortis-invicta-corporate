interface Props {
  size?: 'sm' | 'md' | 'lg'
  width?: number
  height?: number
  showText?: boolean
  style?: React.CSSProperties
  className?: string
}

const SIZE_MAP = { sm: [24, 16], md: [36, 24], lg: [56, 38] }

/**
 * Gambian Flag — inline SVG
 * Stripes (top→bottom): Red · white · Blue · white · Green
 */
export default function GambianFlag({
  size = 'md',
  width,
  height,
  showText = false,
  style,
  className,
}: Props) {
  const [w, h] = width && height ? [width, height] : SIZE_MAP[size]

  const flag = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 90 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', flexShrink: 0, borderRadius: 2 }}
      aria-label="Flag of The Gambia"
      role="img"
    >
      <rect x="0" y="0"  width="90" height="18" fill="#E22020" />
      <rect x="0" y="18" width="90" height="4"  fill="#FFFFFF" />
      <rect x="0" y="22" width="90" height="16" fill="#1A4699" />
      <rect x="0" y="38" width="90" height="4"  fill="#FFFFFF" />
      <rect x="0" y="42" width="90" height="18" fill="#1B7A3E" />
    </svg>
  )

  if (!showText) return <span style={{ display: 'inline-flex', ...style }} className={className}>{flag}</span>

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...style }} className={className}>
      {flag}
      <span style={{ fontSize: size === 'lg' ? 14 : 12, fontWeight: 600, color: '#1B4D3E' }}>
        🇬🇲 The Gambia
      </span>
    </span>
  )
}
