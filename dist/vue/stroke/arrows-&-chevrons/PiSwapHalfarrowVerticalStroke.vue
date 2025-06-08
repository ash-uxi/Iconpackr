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
    <path d="M18 17.1131C16.963 18.5153 15.7515 19.7748 14.3962 20.8603C14.28 20.9534 14.14 21 14 21V6M6 6.88693C7.03704 5.48467 8.24852 4.22522 9.60379 3.13968C9.72005 3.04656 9.86002 3 10 3V18" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSwapHalfarrowVerticalStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapHalfarrowVerticalStroke',
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
      default: 'swap-halfarrow-vertical icon'
    }
  }
}
</script>
