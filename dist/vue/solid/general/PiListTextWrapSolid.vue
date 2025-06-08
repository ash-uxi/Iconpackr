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
    <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H17C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19H14.492L14.7979 20.8356C14.8651 21.2387 14.6802 21.6422 14.331 21.8545C13.9818 22.0668 13.5385 22.0452 13.2115 21.8C12.1587 21.0104 11.208 20.0944 10.3804 19.0731C10.1274 18.7608 10 18.3801 10 18C10 17.6199 10.1274 17.2392 10.3805 16.9269C11.208 15.9056 12.1587 14.9896 13.2115 14.2C13.5385 13.9548 13.9818 13.9332 14.331 14.1455C14.6802 14.3578 14.8651 14.7613 14.7979 15.1644L14.492 17H17C18.1046 17 19 16.1046 19 15C19 13.8954 18.1046 13 17 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H6.5C7.05228 17 7.5 17.4477 7.5 18C7.5 18.5523 7.05228 19 6.5 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiListTextWrapSolid icon from the solid style in general category.
 */
export default {
  name: 'PiListTextWrapSolid',
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
      default: 'list-text-wrap icon'
    }
  }
}
</script>
