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
  <path d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2"/>
  <path d="m9.736 11.927 1.875-.677c.23-.083.48-.083.71 0l1.902.687c.386.14.655.492.687.902l.08 1.027a3.83 3.83 0 0 1-1.995 3.66l-.519.28a1.04 1.04 0 0 1-1.014-.01l-.53-.302a3.83 3.83 0 0 1-1.93-3.473l.045-1.152c.016-.425.29-.798.69-.942"/>
  </svg>
</template>

<script>
/**
 * PiArchiveShieldContrast icon from the contrast style in files-&-folders category.
 */
export default {
  name: 'PiArchiveShieldContrast',
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
      default: 'archive-shield icon'
    }
  }
}
</script>
