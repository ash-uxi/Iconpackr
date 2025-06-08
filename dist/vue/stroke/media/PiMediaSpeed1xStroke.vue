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
    <path d="M13 19L16.5 14.5M16.5 14.5L20 10M16.5 14.5L20 19M16.5 14.5L13 10" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M8.02245 19V5C6.21696 5.44211 4.83732 6.68537 4.01855 8.32289" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMediaSpeed1xStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiMediaSpeed1xStroke',
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
      default: 'media-speed-1x icon'
    }
  }
}
</script>
