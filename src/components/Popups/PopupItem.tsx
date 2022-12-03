import { XIcon } from '@heroicons/react/outline'
import { useRemovePopup } from 'app/state/application/hooks'
import { PopupContent } from 'app/state/application/reducer'
import { useCallback, useEffect } from 'react'

import TransactionPopup from './TransactionPopup'

// @ts-ignore TYPE NEEDS FIXING
const AnimatedFader = ({ duration }) => (
  <div className="h-[3px] bg-dark-800 w-full">
    <style jsx>{`
      .animation {
        animation-duration: ${duration}ms;
        animation-name: fader;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      @keyframes fader {
        from {
          width: 100%;
        }

        to {
          width: 0%;
        }
      }
    `}</style>
    <div className="animation h-[3px] bg-[#746AFB]" />
  </div>
)

export default function PopupItem({
  removeAfterMs,
  content,
  popKey,
}: {
  removeAfterMs: number | null
  content: PopupContent
  popKey: string
}) {
  const removePopup = useRemovePopup()
  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])
  useEffect(() => {
    if (removeAfterMs === null) return undefined

    const timeout = setTimeout(() => {
      removeThisPopup()
    }, removeAfterMs)

    return () => {
      clearTimeout(timeout)
    }
  }, [removeAfterMs, removeThisPopup])

  let popupContent
  if ('txn' in content) {
    const {
      txn: { hash, success, summary },
    } = content
    popupContent = <TransactionPopup hash={hash} success={success} summary={summary} />
  }

  return (
    <div className="mb-4">
      <div className="relative w-full overflow-hidden rounded bg-[#082816] border border-[#06A650] text-[#06A650]">
        <div className="flex flex-row p-4 uppercase font-mono text-2xl whitespace-nowrap">
          {popupContent}
          <div className="cursor-pointer hover:text-white">
            <XIcon width={24} height={24} onClick={removeThisPopup} color="#06A650" />
          </div>
        </div>
        {removeAfterMs !== null ? <AnimatedFader duration={removeAfterMs} /> : null}
      </div>
    </div>
  )
}
