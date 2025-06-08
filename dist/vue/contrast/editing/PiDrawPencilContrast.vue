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
    <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3-.004A9.15 9.15 0 0 1 2.85 12" opacity=".28"/>
  <path d="M9.012 13 8 14.693v5.538M9.012 13 12 8l2.988 5m-5.976 0h5.976m0 0L16 14.693v5.538m0 0a9.15 9.15 0 1 0-8 0m8 0a9.1 9.1 0 0 1-4 .919 9.1 9.1 0 0 1-4-.919"/>
  </svg>
</template>

<script>
/**
 * PiDrawPencilContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiDrawPencilContrast',
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
      default: 'draw-pencil icon'
    }
  }
}
</script>
