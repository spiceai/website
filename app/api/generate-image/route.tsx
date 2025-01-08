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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: '32px'
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '48px',
                      fontWeight: 'bold',
                      letterSpacing: '-0.05em',
                      color: 'white',
                      textAlign: 'left',
                      marginLeft: '80px',
                      width: '384px',
                      marginTop: '40px'
                    }}
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
