import type { MDXComponents } from 'mdx/types'
import GPUModelMatrix from '@/components/gpu-model-matrix'
import Cover from '@/components/cover'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    GPUModelMatrix,
    Cover,
  }
}
