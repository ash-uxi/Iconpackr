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
    <path d="M3 15h18M3 20h18M6 10h12a3 3 0 1 0 0-6H6a3 3 0 0 0 0 6"/>
  <path fill="currentColor" d="M3 7a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiQueueContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiQueueContrast',
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
      default: 'queue icon'
    }
  }
}
</script>
