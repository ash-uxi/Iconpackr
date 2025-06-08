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
    <path d="M12 3V21" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M17 7.50005C16.63 5.94734 15.3249 4.80005 13.7717 4.80005H10.3333C8.49238 4.80005 7 6.41182 7 8.40005C7 10.3883 8.49238 12 10.3333 12L13.6667 12C15.5076 12 17 13.6118 17 15.6C17 17.5883 15.5076 19.2 13.6667 19.2H10.2283C8.67512 19.2 7.37004 18.0528 7 16.5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurrencySignDollarDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
export default {
  name: 'PiCurrencySignDollarDuoStroke',
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
      default: 'currency-sign-dollar icon'
    }
  }
}
</script>
