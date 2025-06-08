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
    <path d="M12 17.1131C13.037 18.5153 14.2485 19.7748 15.6038 20.8603C15.72 20.9534 15.86 21 16 21C16.14 21 16.28 20.9534 16.3962 20.8603C17.7515 19.7748 18.963 18.5153 20 17.1131M4 6.88693C5.03704 5.48467 6.24852 4.22522 7.60379 3.13968C7.72005 3.04656 7.86002 3 8 3C8.13998 3 8.27995 3.04656 8.39621 3.13968C9.75148 4.22522 10.963 5.48467 12 6.88693" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M16 21L16 7M8 3V17" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSwapArrowVerticalDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapArrowVerticalDuoStroke',
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
      default: 'swap-arrow-vertical icon'
    }
  }
}
</script>
