import { ReactNode } from 'react'

export function isReactNode(node: any): node is ReactNode {
  return (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    node === null ||
    node === undefined ||
    (typeof node === 'object' && '$$typeof' in node)
  )
}

export function isString(s: any): s is string {
  return typeof s === 'string'
}
