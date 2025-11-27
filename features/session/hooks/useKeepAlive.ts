'use client'

import { useEffect } from 'react'
import { logEvent } from '@/lib/tracking'
import { useSessionStore } from '@/features/session/store/session'

export const useKeepAlive = (): void => {
  const timeout = useSessionStore((s) => s.inactivityTimeout)

  useEffect(() => {
    const interval = setInterval(() => {
      logEvent({ event_type: 'activity_ping' })
    }, 1000 * 60) // ping каждые 60 секунд

    return () => clearInterval(interval)
  }, [timeout])
}