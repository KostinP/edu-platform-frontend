'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { logEvent } from '@/lib/tracking'

export const usePageView = (): void => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    
    logEvent({
      event_type: 'page_view',  // изменяем с type на event_type
      event_data: {
        page: url,
        referrer: document.referrer || 'direct',
        title: document.title,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      }
    })
  }, [pathname, searchParams])
}