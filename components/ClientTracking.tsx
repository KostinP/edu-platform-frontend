'use client'

import { useAutoTracking } from '@/features/tracking/hooks/useAutoTracking'
import { useKeepAlive } from '@/features/session/hooks/useKeepAlive'
import { useVisitorTracker } from '@/features/tracking/hooks/useVisitorTracker'
import { usePageView } from '@/features/tracking/hooks/usePageView'

export default function ClientTracking() {
  // Все клиентские хуки вызываются здесь
  useAutoTracking()
  useVisitorTracker()
  useKeepAlive()
  usePageView()

  // Этот компонент ничего не рендерит
  return null
}