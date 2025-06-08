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
    <path d="M8 12H14C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4H10.8571C10.0592 4 9.66019 4 9.33944 4.11223C8.76495 4.31326 8.31326 4.76495 8.11223 5.33944C8 5.66019 8 6.05917 8 6.85714V12ZM8 12L5 12M8 12V16M8 21V16M5 16H8M15 16H8" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCurrencySignRubleStroke icon from the stroke style in money-&-payments category.
 */
export default {
  name: 'PiCurrencySignRubleStroke',
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
      default: 'currency-sign-ruble icon'
    }
  }
}
</script>
