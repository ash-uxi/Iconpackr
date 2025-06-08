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
    <path d="M5 3L12 11.1M12 11.1L19 3M12 11.1V21" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M6 12H18M6 16H18" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurrencySignYuanDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
export default {
  name: 'PiCurrencySignYuanDuoStroke',
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
      default: 'currency-sign-yuan icon'
    }
  }
}
</script>
