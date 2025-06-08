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
    <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  <path d="M8 12h8m-4-4h.001m0 8zm9.15-4a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
  </svg>
</template>

<script>
/**
 * PiDivideCircleContrast icon from the contrast style in maths category.
 */
export default {
  name: 'PiDivideCircleContrast',
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
      default: 'divide-circle icon'
    }
  }
}
</script>
