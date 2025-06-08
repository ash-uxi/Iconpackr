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
    <path d="M7.99399 1H7.30171C6.94349 1 6.61264 1.19161 6.43436 1.5023C5.53485 3.0699 5 4.97535 5 6.88889C5 10.4502 7.36105 13.4678 11 13.9368V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H11.9986L12 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V13.9368C16.639 13.4678 19 10.4502 19 6.88889C19 4.97535 18.4651 3.0699 17.5656 1.5023C17.3874 1.19161 17.0565 1 16.6983 1H10.9614C11.7608 1.90637 12.392 2.99412 12.6845 4.3753C12.769 4.77399 12.603 5.18404 12.2651 5.41179L11.1302 6.1766C11.2804 6.6065 11.5127 6.98252 11.8286 7.29079C12.2238 7.67654 12.2315 8.30966 11.8458 8.7049C11.46 9.10014 10.8269 9.10783 10.4316 8.72207C9.62559 7.93536 9.17578 6.93905 9.00528 5.89954C8.94203 5.51392 9.10919 5.12679 9.43324 4.90841L10.5522 4.15437C10.1073 2.86743 9.20434 1.91411 7.99399 1Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiWineGlassBrokenSolid icon from the solid style in food category.
 */
export default {
  name: 'PiWineGlassBrokenSolid',
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
      default: 'wine-glass-broken icon'
    }
  }
}
</script>
