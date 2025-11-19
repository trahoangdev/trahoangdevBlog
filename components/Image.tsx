// For static export compatibility, we use regular img tag instead of next/image
const Image = ({ src, alt, width, height, ...rest }: any) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} width={width} height={height} {...rest} />
)

export default Image
