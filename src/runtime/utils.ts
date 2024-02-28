import type { ModuleOptions } from '../module'
import type { GoogleTagOptions } from './types'
import { toRaw } from '#imports'

export function resolveTags(options: Required<ModuleOptions>) {
  // Normalize tags
  const tags: GoogleTagOptions[] = toRaw(options).tags.filter(Boolean)
    .map(i => typeof i === 'string' ? { id: i } : i)

  if (options.id) {
    const { id, config, initCommands } = toRaw(options)
    tags.unshift({ id, config, initCommands })
  }

  return tags
}
