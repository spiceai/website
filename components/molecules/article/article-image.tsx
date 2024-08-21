export const ArticleImage = ({ title }: { title: string }) => {
  const versionRegex = /v\d+(\.\d+)*(-[a-zA-Z]+)?/
  const match = title.match(versionRegex)
  const shortTitle = match ? 'Spice.ai ' + match[0] : title

  const placeholderUrl = `https://placehold.co/600x400?text=${encodeURIComponent(shortTitle)}&font=manrope`

  return (
    <img
      src={placeholderUrl}
      alt={title}
      width={600}
      height={400}
      className='w-full overflow-hidden rounded-[4px]'
    />
  )
}