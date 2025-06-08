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
    <path d="M15.7879 3.08164C14.5692 2.07036 12.7371 2.37479 11.9109 3.72586L9.71459 7.31741C9.64078 7.43811 9.55179 7.49971 9.44568 7.53365C9.32606 7.57192 9.15334 7.58243 8.94223 7.53027C7.05819 7.0648 5.06795 7.61903 3.69568 8.9913C3.16626 9.52072 3.1067 10.3589 3.55592 10.9578C4.70016 12.4835 5.92074 13.9539 7.2439 15.3426L2.77532 19.8112C2.38479 20.2017 2.38479 20.8349 2.77532 21.2254C3.16584 21.6159 3.799 21.6159 4.18953 21.2254L8.65811 16.7568C10.0468 18.08 11.5172 19.3005 13.0429 20.4448C13.6418 20.894 14.48 20.8344 15.0094 20.305C16.3817 18.9327 16.9359 16.9425 16.4704 15.0585C16.4183 14.8474 16.4288 14.6746 16.467 14.555C16.501 14.4489 16.5626 14.3599 16.6833 14.2861L20.2748 12.0898C21.6259 11.2636 21.9303 9.4315 20.919 8.21278C19.3624 6.3368 17.6639 4.6383 15.7879 3.08164Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiPinSlantSolid icon from the solid style in general category.
 */
export default {
  name: 'PiPinSlantSolid',
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
      default: 'pin-slant icon'
    }
  }
}
</script>
