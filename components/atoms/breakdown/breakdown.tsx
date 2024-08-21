import Image from 'next/image'

export const Breakdown = () => {
  return (
    <div>
      <Image
        src='/breakdown.webp'
        alt='Spice.ai breakdown'
        width={1000}
        height={500}
        className='h-auto w-full'
        priority
      />
    </div>
  )
}
