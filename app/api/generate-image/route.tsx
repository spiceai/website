import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Default Title'

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
          backgroundColor: 'black',
          fontFamily: 'Manrope',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: "url('https://oss-website-spice.vercel.app/bg-articles.png')"
        }}
      >
        <div tw='flex flex-col w-full h-full items-center justify-center '>
          <div tw=' flex w-full'>
            <div tw='flex flex-col md:flex-row w-full md:items-center justify-between p-8'>
              <h2
                style={{ fontFamily: 'Arial' }}
                tw='flex flex-col text-3xl ml-20 w-96 mb-32 sm:text-4xl font-bold tracking-tight text-gray-900 text-left'
              >
                <span tw='text-white'>{title}</span>
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
