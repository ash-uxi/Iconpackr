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
    <path d="M18.4099 22.5728C17.5639 21.9383 16.7999 21.2022 16.1349 20.3816C16.045 20.2706 16 20.136 16 20.0014M18.4099 17.4299C17.5639 18.0644 16.7999 18.8005 16.1349 19.6212C16.045 19.7321 16 19.8668 16 20.0014M16 20.0014H22M2 9H2.00559M2.00559 9H21.9944M2.00559 9C2 9.41261 2 9.87562 2 10.4V13.6C2 15.8402 2 16.9603 2.43597 17.816C2.81947 18.5686 3.43139 19.1805 4.18404 19.564C5.03968 20 6.15979 20 8.4 20H12M2.00559 9C2.02389 7.6499 2.10205 6.8394 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C5.03968 4 6.15979 4 8.4 4H15.6C17.8402 4 18.9603 4 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8979 6.8394 21.9761 7.6499 21.9944 9M21.9944 9H22M21.9944 9C22 9.41261 22 9.87562 22 10.4V13.6C22 14.4138 22 15.0798 21.9791 15.639M6 13H9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCreditCardArrowLeftStroke icon from the stroke style in money-&-payments category.
 */
export default {
  name: 'PiCreditCardArrowLeftStroke',
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
      default: 'credit-card-arrow-left icon'
    }
  }
}
</script>
