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
    <path d="M11.9995 8L9.8457 11.5H14.1534L11.9995 15" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21.8277 10.3517C21.8808 10.5015 21.9219 10.6553 21.9506 10.8118C22 11.0805 22 11.3591 22 11.9161V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V18C14.0002 18 9.99967 18.0261 6 17.9983V19C6 20.1046 5.10457 21 4 21C2.89543 21 2 20.1046 2 19V11.9161C2 11.3591 2 11.0805 2.04937 10.8118C2.07811 10.6553 2.11924 10.5015 2.1723 10.3517M21.8277 10.3517C21.7999 10.2733 21.7688 10.1959 21.7345 10.1199C21.6221 9.87083 21.4636 9.64184 21.1465 9.18386L19.6815 7.06779C19.1577 6.31108 18.8957 5.93272 18.5544 5.65915C18.2522 5.41692 17.906 5.2355 17.5348 5.1249C17.1156 5 16.6554 5 15.735 5H8.26497C7.34461 5 6.88443 5 6.46522 5.1249C6.09404 5.2355 5.74779 5.41692 5.44558 5.65915C5.10427 5.93272 4.84232 6.31109 4.31845 7.06779L2.85348 9.18387C2.53642 9.64184 2.37789 9.87083 2.2655 10.1199C2.2312 10.1959 2.20011 10.2733 2.1723 10.3517M21.8277 10.3517C22.2299 10.2934 22.621 10.2315 23 10.1664M2.1723 10.3517C1.7701 10.2934 1.37904 10.2315 1 10.1664" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCarFrontViewBoltDuoStroke icon from the duo-stroke style in automotive category.
 */
export default {
  name: 'PiCarFrontViewBoltDuoStroke',
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
      default: 'car-front-view-bolt icon'
    }
  }
}
</script>
