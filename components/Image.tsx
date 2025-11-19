// For static export compatibility, we use regular img tag with lazy loading
const Image = ({ src, alt, width, height, className, ...rest }: any) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    decoding="async"
    className={className}
    {...rest}
  />
)

export default Image
