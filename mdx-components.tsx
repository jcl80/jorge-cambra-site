import type { MDXComponents } from 'mdx/types'
import GPUModelMatrix from '@/components/gpu-model-matrix'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    GPUModelMatrix,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
