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
    <path d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.13401 4 6 7.13401 6 11V13C6 16.866 9.13401 20 13 20C14.4872 20 15.8662 19.5362 17 18.7453" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 10H14M3 14H13" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurrencySignEuroDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
export default {
  name: 'PiCurrencySignEuroDuoStroke',
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
      default: 'currency-sign-euro icon'
    }
  }
}
</script>
