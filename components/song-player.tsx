'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

// Module-level singleton: at most one <audio> element plays at a time across
// every SongPlayer on the page, regardless of how many mount.
let currentlyPlaying: HTMLAudioElement | null = null

type SongPlayerProps = {
  src: string
  title: string
  artist?: string
}

export default function SongPlayer({ src, title, artist }: SongPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      if (currentlyPlaying === audio) currentlyPlaying = null
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      if (currentlyPlaying && currentlyPlaying !== audio) {
        currentlyPlaying.pause()
      }
      currentlyPlaying = audio
      audio.play()
    } else {
      audio.pause()
    }
  }

  const label = artist ? `${title} — ${artist}` : title

  return (
    <div className="not-prose fixed bottom-6 right-6 z-30">
      <button
        onClick={toggle}
        aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
        title={label}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-0 text-zinc-50 shadow-lg outline-none backdrop-blur-sm transition-colors ${
          isPlaying
            ? 'bg-zinc-900 hover:bg-zinc-700'
            : 'bg-zinc-900/60 hover:bg-zinc-900/80'
        }`}
      >
        {isPlaying ? (
          <Pause size={18} fill="currentColor" />
        ) : (
          <Play size={18} fill="currentColor" className="ml-0.5" />
        )}
      </button>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  )
}
