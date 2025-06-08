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
    <path d="M17.51 17.51A8.5 8.5 0 1 0 5.49 5.49a8.5 8.5 0 0 0 12.02 12.02m0 0L21 21"/>
  <path fill="currentColor" d="M20 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiSearchBigContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiSearchBigContrast',
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
      default: 'search-big icon'
    }
  }
}
</script>
