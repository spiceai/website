import { StaticImageData } from 'next/image'
import ImageAfter from 'public/after-demo.webp'
import ImageBefore from 'public/before-demo.webp'

export type SlideData = {
  imageBefore: StaticImageData
  imageAfter: StaticImageData
  benefits: {
    textBefore: string
    textAfter: string
  }[]
}

export const beforeAndAfterSlides: SlideData[] = [
  {
    imageBefore: ImageBefore,
    imageAfter: ImageAfter,
    benefits: [
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      }
    ]
  },
  {
    imageBefore: ImageBefore,
    imageAfter: ImageAfter,
    benefits: [
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      }
    ]
  },
  {
    imageBefore: ImageBefore,
    imageAfter: ImageAfter,
    benefits: [
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      }
    ]
  },
  {
    imageBefore: ImageBefore,
    imageAfter: ImageAfter,
    benefits: [
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      },
      {
        textBefore: 'Without Spice, connect the data is a huge challenge.',
        textAfter: 'Spice did all the hard work of connecting the app to data.'
      }
    ]
  }
]
