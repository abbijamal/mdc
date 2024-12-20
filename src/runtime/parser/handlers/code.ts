import type { State } from 'mdast-util-to-hast'
import type { Element, Properties } from 'hast'
import type { Code } from 'mdast'
import { detab } from 'detab'
import { parseThematicBlock } from './utils'

export default (state: State, node: Code) => {
  const lang = (node.lang || '') + ' ' + (node.meta || '')
  const { language = 'text', highlights, filename, meta } = parseThematicBlock(lang)
  const value = node.value ? detab(node.value + '\n') : ''

  // Create `<code>`.
  let result: Element = {
    type: 'element',
    tagName: 'code',
    properties: { __ignoreMap: '' },
    children: [{ type: 'text', value }]
  }

  if (meta) {
    result.data = {
      meta
    }
  }

  state.patch(node, result)
  result = state.applyData(node, result)

  const properties: Properties = {
    language: language || 'text',
    filename,
    highlights,
    meta,
    code: value
  }

  if (language) {
    properties.className = ['language-' + language]
  }

  // Create `<pre>`.
  result = { type: 'element', tagName: 'pre', properties, children: [result] }
  state.patch(node, result)
  return result
}
