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
    <path d="M8 4C6.34315 4 5 5.34315 5 7V9C5 10.6569 3.65685 12 2 12C3.65685 12 5 13.3431 5 15V17C5 18.6569 6.34315 20 8 20M16 4C17.6569 4 19 5.34315 19 7V9C19 10.6569 20.3431 12 22 12C20.3431 12 19 13.3431 19 15V17C19 18.6569 17.6569 20 16 20M9 12.2587L11.0362 14.2927C12.0155 12.5802 13.3709 11.1125 15 10" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurlyBracesCodeCheckStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiCurlyBracesCodeCheckStroke',
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
      default: 'curly-braces-code-check icon'
    }
  }
}
</script>
