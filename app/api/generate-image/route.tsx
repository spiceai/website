import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
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
            fontFamily: 'Manrope, Arial, sans-serif',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              backgroundImage: "url('https://oss-website-spice.vercel.app/bg-articles.png')",
              backgroundSize: '100% 100%'
            }}
          >
            <div className='flex flex-col w-full h-full items-center justify-center'>
              <div className='flex w-full'>
                <div className='flex flex-col md:flex-row w-full md:items-center justify-between p-8'>
                  <h2
                    style={{ fontFamily: 'Arial, sans-serif' }}
                    className='flex flex-col text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-left ml-4 sm:ml-8 lg:ml-36 w-full sm:w-3/4 lg:w-96 mt-10'
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 418
      }
    )
  } catch (error) {
    console.error('Error generating image:', error)
    return new Response('Error generating image', { status: 500 })
  }
}
