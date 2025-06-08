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
    <path d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0h12v3m-4-3v2"/>
  <path fill="currentColor" d="M2 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiKeyRightContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiKeyRightContrast',
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
      default: 'key-right icon'
    }
  }
}
</script>
