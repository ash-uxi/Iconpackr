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
    <path d="M10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13L8 18C8 18.5523 8.44771 19 9 19C9.55228 19 10 18.5523 10 18V13Z" fill="currentColor" stroke="none"/>
  <path d="M12.7637 1.09884C12.2631 0.967055 11.7369 0.967055 11.2363 1.09884C10.6635 1.24962 10.1669 1.62329 9.60067 2.0493L9.48 2.14L1.4 8.2C1.14819 8.38885 1 8.68524 1 9V10C1 10.5523 1.44772 11 2 11H22C22.5523 11 23 10.5523 23 10V9C23 8.68524 22.8518 8.38885 22.6 8.2L14.52 2.14L14.3993 2.0493C13.8331 1.62329 13.3365 1.24962 12.7637 1.09884Z" fill="currentColor" stroke="none"/>
  <path d="M16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13L14 18C14 18.5523 14.4477 19 15 19C15.5523 19 16 18.5523 16 18L16 13Z" fill="currentColor" stroke="none"/>
  <path d="M2 20C1.44772 20 1 20.4477 1 21C1 21.5523 1.44772 22 2 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20H2Z" fill="currentColor" stroke="none"/>
  <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18V13Z" fill="currentColor" stroke="none"/>
  <path d="M5 13C5 12.4477 4.55228 12 4 12C3.44772 12 3 12.4477 3 13L3 18C3 18.5523 3.44771 19 4 19C4.55228 19 5 18.5523 5 18L5 13Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiBankSolid icon from the solid style in money-&-payments category.
 */
export default {
  name: 'PiBankSolid',
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
      default: 'bank icon'
    }
  }
}
</script>
