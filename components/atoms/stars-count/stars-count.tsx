import { GITHUB_REPO } from 'lib/constants'

export const StarsCount = async () => {
  const res = await fetch(GITHUB_REPO, { cache: 'force-cache' }).then((res) => res.json())
  const stars = res.stargazers_count

  return <span>{formatStars(stars || 1800)}</span>
}

function formatStars(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}
