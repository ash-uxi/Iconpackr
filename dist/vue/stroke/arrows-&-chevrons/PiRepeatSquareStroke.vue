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
    <path d="M12 2C13.0964 2.79655 14.0785 3.73031 14.9207 4.77659C14.974 4.84283 15.0004 4.92241 15 5.00189M12 8C13.0964 7.20345 14.0785 6.26969 14.9207 5.22341C14.9731 5.15821 14.9996 5.0801 15 5.00189M12 16C10.9036 16.7965 9.92154 17.7303 9.07935 18.7766C9.02687 18.8418 9.00042 18.9199 9 18.9981M12 22C10.9036 21.2035 9.92154 20.2697 9.07935 19.2234C9.02603 19.1572 8.99958 19.0776 9 18.9981M15 5.00189C14.6991 5 14.3677 5 14 5H10C8.13872 5 7.20808 5 6.45492 5.24472C4.93273 5.73931 3.73931 6.93273 3.24472 8.45492C3 9.20808 3 10.1387 3 12C3 13.8613 3 14.7919 3.24472 15.5451C3.56708 16.5372 4.18631 17.3897 4.99995 18M9 18.9981C9.30088 19 9.63228 19 10 19H14C15.8613 19 16.7919 19 17.5451 18.7553C19.0673 18.2607 20.2607 17.0673 20.7553 15.5451C21 14.7919 21 13.8613 21 12C21 10.1387 21 9.20808 20.7553 8.45492C20.4329 7.46279 19.8137 6.61033 19.0001 6" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiRepeatSquareStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiRepeatSquareStroke',
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
      default: 'repeat-square icon'
    }
  }
}
</script>
