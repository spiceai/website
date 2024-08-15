'use client'
import clsx from 'clsx'
import { FcLinux } from 'react-icons/fc'
import { useEffect, useRef, useState } from 'react'
import { FaApple, FaWindows } from 'react-icons/fa'

import { Code } from 'components/atoms/code/code'
import { Button } from 'components/atoms/button/button'

let allTabs = [
  {
    id: 'mac',
    name: 'mac OS',
    command: 'curl https://install.spiceai.org | /bin/bash'
  },
  {
    id: 'linux',
    name: 'Linux',
    command: 'curl -o install.sh https://install.spiceai.org'
  },
  {
    id: 'windows',
    name: 'Windows',
    command: 'Invoke-WebRequest -Uri "https://install.spiceai.org"'
  }
]

export const InstallOptions = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([])
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0)
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

  useEffect(() => {
    if (activeTabIndex === null) {
      return
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 8)
      setTabUnderlineWidth(currentTab?.clientWidth ?? 126)
    }

    setTabPosition()
  }, [activeTabIndex])

  return (
    <div className='pt-14'>
      <div className='flew-row relative mx-auto grid h-12 grid-cols-3 gap-2 px-2 backdrop-blur-sm md:flex'>
        <span
          className={clsx(
            'absolute bottom-0 top-0 -z-10 rounded-lg bg-alpha-100 px-4 py-3 transition-all duration-300',
            tabUnderlineLeft === 0 ? 'opacity-0' : 'opacity-100'
          )}
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
        {allTabs.map((tab, index) => {
          const isActive = activeTabIndex === index

          return (
            <Button
              key={index}
              variant='tag'
              ref={(el) => {
                tabsRef.current[index] = el
              }}
              className={clsx(
                'relative bottom-1 flex items-center justify-center gap-2 md:bottom-0',
                isActive && 'hover:bg-transparent'
              )}
              onClick={() => setActiveTabIndex(index)}
            >
              <>
                {index === 0 && <FaApple className='h-7 w-7' />}
                {index === 1 && <FcLinux className='h-7 w-7' />}
                {index === 2 && <FaWindows className='h-6 w-6' />}

                <span className='hidden md:block'>{tab.name}</span>
              </>
            </Button>
          )
        })}
      </div>
      {activeTabIndex !== null && <Code code={allTabs[activeTabIndex].command} />}
    </div>
  )
}
