import NextImage, { ImageProps } from 'next/image'

// For static export compatibility, we disable image optimization
const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} unoptimized />

export default Image
