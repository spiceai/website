import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Default Title'
  const backgroundUrl = searchParams.get('backgroundUrl')

  // if (!backgroundUrl) {
  //   return new Response('Missing backgroundUrl parameter', { status: 400 })
  // }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
          backgroundImage: "url('https://localhost:3000/bg-article.png')"
        }}
      >
        <div tw='flex flex-col w-full h-full items-center justify-center '>
          <div tw='bg-gray-50 flex w-full'>
            <div tw='flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8'>
              <h2 tw='flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left'>
                <span tw='text-indigo-600'>{title}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
