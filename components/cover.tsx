'use client'

import { useState } from 'react'

type CoverProps = {
  src: string
  alt: string
  caption: string
  /**
   * Fraction of the image's height to crop off the TOP (0–1).
   * e.g. cropTop={0.3} shows only the bottom 70% of the image.
   */
  cropTop?: number
}

export default function Cover({ src, alt, caption, cropTop = 0 }: CoverProps) {
  const [ratio, setRatio] = useState<number | null>(null)

  // No crop requested → render the image exactly as before.
  if (!cropTop) {
    return (
      <figure>
        <img src={src} alt={alt} className="rounded-xl" />
        <figcaption className="text-center">{caption}</figcaption>
      </figure>
    )
  }

  return (
    <figure>
      <div
        className="overflow-hidden rounded-xl"
        style={ratio ? { aspectRatio: String(ratio) } : undefined}
      >
        <img
          src={src}
          alt={alt}
          onLoad={(e) => {
            const img = e.currentTarget
            // Displayed box ratio = width / (visible height).
            // Visible height = natural height * (1 - cropTop).
            setRatio(img.naturalWidth / (img.naturalHeight * (1 - cropTop)))
          }}
          className={
            ratio
              ? 'h-full w-full object-cover object-bottom'
              : 'block w-full'
          }
        />
      </div>
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}
