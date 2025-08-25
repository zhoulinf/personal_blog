import withNuxt from './.nuxt/eslint.config.mjs'
import { configs } from '@person_blog/eslint-config'

export default withNuxt([
  ...configs.vue,
])
