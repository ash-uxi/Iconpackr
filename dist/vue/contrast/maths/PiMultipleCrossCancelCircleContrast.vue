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
    <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
  <path d="m9 15 3-3m0 0 3-3m-3 3L9 9m3 3 3 3m-3 6.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  </svg>
</template>

<script>
/**
 * PiMultipleCrossCancelCircleContrast icon from the contrast style in maths category.
 */
export default {
  name: 'PiMultipleCrossCancelCircleContrast',
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
      default: 'multiple-cross-cancel-circle icon'
    }
  }
}
</script>
