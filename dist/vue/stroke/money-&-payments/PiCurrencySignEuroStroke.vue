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
    <path d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.47353 4 6.55612 6.60771 6.07089 10M17 18.7453C15.8662 19.5362 14.4872 20 13 20C9.47353 20 6.55612 17.3923 6.07089 14M6.07089 10C6.02417 10.3266 6 10.6605 6 11V13C6 13.3395 6.02417 13.6734 6.07089 14M6.07089 10H3M6.07089 10L14 10M6.07089 14H3M6.07089 14H13" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurrencySignEuroStroke icon from the stroke style in money-&-payments category.
 */
export default {
  name: 'PiCurrencySignEuroStroke',
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
