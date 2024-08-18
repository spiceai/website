export const StarsCount = async () => {
  const res = await fetch('https://api.github.com/repos/spiceai/spiceai').then((res) => res.json())
  const stars = res.stargazers_count
  console.log(stars)

  return <span>{formatStars(stars)}</span>
}

function formatStars(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}
