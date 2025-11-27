'use client'

import { useEffect } from 'react'
import { logEvent } from '@/lib/tracking'

export const useAutoTracking = (): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement
      const name = target.getAttribute('data-track') || target.tagName
      logEvent({ 
        event_type: 'click',  // изменяем с type на event_type
        event_data: { name }  // изменяем с data на event_data
      })
    }

    const handleScroll = (): void => {
      logEvent({ 
        event_type: 'scroll',  // изменяем с type на event_type
        event_data: { position: window.scrollY }  // изменяем с data на event_data
      })
    }

    const handlePageView = (): void => {
      logEvent({ 
        event_type: 'page_view',  // изменяем с type на event_type
        event_data: { 
          pathname: window.location.pathname,
          url: window.location.href,
          referrer: document.referrer || 'direct',
          timestamp: new Date().toISOString()
        }  // изменяем с data на event_data
      })
    }

    // Задержка для инициализации
    setTimeout(handlePageView, 100)
    
    window.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}