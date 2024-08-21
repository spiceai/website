import { GITHUB_MAIN_REPO } from 'lib/constants'

export const StarsCount = async () => {
  const token = process.env.GITHUB_PAT

  if (!token) {
    console.error('GitHub token is not set in environment variables')
    return <span>{formatStars(1200)}</span>
  }

  const res = await fetch(GITHUB_MAIN_REPO, {
    next: { revalidate: 14400 }, // Every 4 hours
    headers: {
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.json())

  if (!res.stargazers_count) {
    console.error('Error fetching stars count', res)
  }

  const stars = res.stargazers_count

  return <span>{formatStars(stars || 1200)}</span>
}

function formatStars(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}
