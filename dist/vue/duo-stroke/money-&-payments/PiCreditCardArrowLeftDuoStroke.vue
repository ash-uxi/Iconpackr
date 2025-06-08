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
    <path d="M12 20H8.4C6.15979 20 5.03968 20 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43597 17.816C2 16.9603 2 15.8402 2 13.6V10.4C2 8.15979 2 7.03968 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C5.03968 4 6.15979 4 8.4 4H15.6C17.8402 4 18.9603 4 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C22 7.03968 22 8.15979 22 10.4V13.6C22 14.4138 22 15.0798 21.9791 15.639" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M18.4099 22.5728C17.5639 21.9383 16.7999 21.2022 16.1349 20.3816C16.045 20.2706 16 20.136 16 20.0014M18.4099 17.4299C17.5639 18.0644 16.7999 18.8005 16.1349 19.6212C16.045 19.7321 16 19.8668 16 20.0014M16 20.0014L22 20.0014M2 9H22M6 13H9" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCreditCardArrowLeftDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
export default {
  name: 'PiCreditCardArrowLeftDuoStroke',
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
