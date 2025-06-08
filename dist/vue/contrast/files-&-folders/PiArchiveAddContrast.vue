<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M4 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clip-rule="evenodd" opacity=".28"/>
  <path d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M9 14.5h3m0 0h3m-3 0v-3m0 3v3"/>
  </svg>
</template>

<script>
/**
 * PiArchiveAddContrast icon from the contrast style in files-&-folders category.
 */
export default {
  name: 'PiArchiveAddContrast',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'archive-add icon'
    }
  }
}
</script>
