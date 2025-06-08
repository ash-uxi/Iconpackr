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
    <path d="M11.9993 6V7.2M11.9993 7.2V12M11.9993 7.2H10.8882C9.66094 7.2 8.66602 8.27452 8.66602 9.6C8.66602 10.9255 9.66094 12 10.8882 12H11.9993M11.9993 7.2H13.1805C14.2159 7.2 15.086 7.96486 15.3327 9M11.9993 12V16.8M11.9993 12L13.1105 12C14.3378 12 15.3327 13.0745 15.3327 14.4C15.3327 15.7255 14.3378 16.8 13.1105 16.8H11.9993M11.9993 16.8V18M11.9993 16.8H10.8182C9.78276 16.8 8.91271 16.0351 8.66602 15" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M8.49963 20.4567C5.1828 19.0824 2.84961 15.8137 2.84961 12C2.84961 8.18624 5.1828 4.91748 8.49963 3.54321M15.4996 3.54321C18.8164 4.91748 21.1496 8.18624 21.1496 12C21.1496 15.8137 18.8164 19.0824 15.4996 20.4567" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCryptoCurrencyUsdcDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
export default {
  name: 'PiCryptoCurrencyUsdcDuoStroke',
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
      default: 'crypto-currency-usdc icon'
    }
  }
}
</script>
