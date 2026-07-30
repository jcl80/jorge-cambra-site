import type { MDXComponents } from 'mdx/types'
import GPUModelMatrix from '@/components/gpu-model-matrix'
import Cover from '@/components/cover'
import Footnote from '@/components/footnote'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    GPUModelMatrix,
    Cover,
    Footnote,
  }
}
