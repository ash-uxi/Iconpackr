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
    <path d="M6.88693 12C5.48467 13.037 4.22522 14.2485 3.13968 15.6038C3.04656 15.72 3 15.86 3 16M6.88693 20C5.48467 18.963 4.22522 17.7515 3.13968 16.3962C3.04656 16.28 3 16.14 3 16M3 16H17M17.1131 4C18.5153 5.03704 19.7748 6.24852 20.8603 7.60379C20.9534 7.72005 21 7.86002 21 8M17.1131 12C18.5153 10.963 19.7748 9.75148 20.8603 8.39621C20.9534 8.27995 21 8.13998 21 8M21 8H7" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSwapArrowHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapArrowHorizontalStroke',
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
      default: 'swap-arrow-horizontal icon'
    }
  }
}
</script>
