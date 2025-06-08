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
    <path d="M18 2C19.0964 2.79655 20.0785 3.73031 20.9207 4.77659C20.9736 4.84231 21 4.92116 21 5M18 8C19.0964 7.20345 20.0785 6.26969 20.9207 5.22341C20.9736 5.15769 21 5.07884 21 5M21 5H11C8.19974 5 6.79961 5 5.73005 5.54497C4.78924 6.02433 4.02433 6.78924 3.54497 7.73005C3.06911 8.66397 3.00876 9.84993 3.00111 12M6 16C4.90359 16.7965 3.92154 17.7303 3.07935 18.7766C3.02645 18.8423 3 18.9212 3 19M6 22C4.90359 21.2035 3.92154 20.2697 3.07935 19.2234C3.02645 19.1577 3 19.0788 3 19M3 19H13C15.8003 19 17.2004 19 18.27 18.455C19.2108 17.9757 19.9757 17.2108 20.455 16.27C20.9309 15.336 20.9912 14.1501 20.9989 12" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiRepeatRectangularStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiRepeatRectangularStroke',
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
      default: 'repeat-rectangular icon'
    }
  }
}
</script>
