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
    <path d="M16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H16Z" fill="currentColor" stroke="none"/>
  <path d="M2 16.4C2 14.5222 3.52223 13 5.4 13H18.6C20.3424 13 21.7787 14.3107 21.9767 16H16C14.3431 16 13 17.3431 13 19C13 19.7684 13.2889 20.4692 13.7639 21H5.4C3.52223 21 2 19.4778 2 17.6V16.4Z" fill="currentColor" stroke="none"/>
  <path d="M2 6.4C2 4.52223 3.52223 3 5.4 3H18.6C20.4778 3 22 4.52223 22 6.4V7.6C22 9.47777 20.4778 11 18.6 11H5.4C3.52223 11 2 9.47777 2 7.6V6.4ZM14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6ZM18 6C17.4477 6 17 6.44772 17 7C17 7.55228 17.4477 8 18 8C18.5523 8 19 7.55228 19 7C19 6.44772 18.5523 6 18 6Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiServerRemoveSolid icon from the solid style in development category.
 */
export default {
  name: 'PiServerRemoveSolid',
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
      default: 'server-remove icon'
    }
  }
}
</script>
