import { Title } from 'components/atoms/title/title'
import { ArticlesCarousel } from './articles-carousel'
import { GITHUB_REPO } from 'lib/constants'

type GitHubItem = {
  name: string
  path: string
  type: 'dir' | 'file'
  download_url: string | null
}

export type ProcessedFile = {
  name: string
  content: {
    title: string
    description: string
  }
}

async function fetchContents(path: string): Promise<GitHubItem[]> {
  const res = await fetch(`${GITHUB_REPO}/contents/${path}`, { cache: 'force-cache' })
  return res.json()
}

async function fetchFileContent(url: string): Promise<string> {
  const res = await fetch(url, { cache: 'force-cache' })
  return res.text()
}

function parseMarkdown(markdown: string): { title: string; description: string } {
  const lines = markdown.split('\n')
  let title = ''
  let description = ''

  for (const line of lines) {
    if (!title && line.startsWith('# ')) {
      title = line.slice(2).trim()
    } else if (!description && line.trim() !== '' && !line.startsWith('#')) {
      description = line.trim()
      break
    }
  }

  return { title, description }
}

async function getFormattedData(): Promise<ProcessedFile[]> {
  const initialData = await fetchContents('docs/release_notes')
  const processedFiles: ProcessedFile[] = []

  for (const item of initialData) {
    if (item.type === 'file' && item.name.endsWith('.md') && item.download_url) {
      const content = await fetchFileContent(item.download_url)
      processedFiles.push({
        name: item.name,
        content: parseMarkdown(content)
      })
    } else if (item.type === 'dir' && item.name === 'alpha') {
      const alphaFiles = await fetchContents(item.path)
      for (const alphaItem of alphaFiles) {
        if (alphaItem.type === 'file' && alphaItem.name.endsWith('.md') && alphaItem.download_url) {
          const content = await fetchFileContent(alphaItem.download_url)
          processedFiles.push({
            name: `alpha/${alphaItem.name}`,
            content: parseMarkdown(content)
          })
        }
      }
    }
  }

  return processedFiles
}

export const Articles = async () => {
  const data = await getFormattedData()

  // TODO: How can I get the link, image and tags data?

  return (
    <section className='relative mb-28 pb-0 md:py-36'>
      <Title as='h3' variant='medium' className='pb-6 text-center md:pb-14 md:text-left'>
        Latest Articles
      </Title>
      <ArticlesCarousel data={data} />
    </section>
  )
}
