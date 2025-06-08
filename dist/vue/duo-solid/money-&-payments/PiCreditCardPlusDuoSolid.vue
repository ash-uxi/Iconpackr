<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M21.995 9H2.005M9 13H6m13 9v-3m0 0v-3m0 3h-3m3 0h3" /> <path :fill="color || 'currentColor'" d="M8.357 3C7.273 3 6.4 3 5.691 3.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 5.73c-.302.592-.428 1.233-.487 1.961C1 8.4 1 9.273 1 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 21 7.273 21 8.357 21h5.407A3 3 0 1 1 22 16c.333 0 .654.054.954.155.046-.68.046-1.506.046-2.512v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C17.6 3 16.727 3 15.643 3z" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiCreditCardPlusDuoSolid icon from the duo-solid style in money-&-payments category.
 */
export default {
  name: 'PiCreditCardPlusDuoSolid',
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
      default: 'credit-card-plus icon'
    }
  }
}
</script>
