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
    <path d="M10.1115 13.9161C6.66176 12.9597 3.25 15.5543 3.25 19.1341C3.25 20.5789 4.4212 21.7501 5.86595 21.7501H18.1341C19.5788 21.7501 20.75 20.5789 20.75 19.1341C20.75 15.5543 17.3382 12.9597 13.8885 13.9161L13.1926 14.109C12.4122 14.3253 11.5878 14.3253 10.8074 14.109L10.1115 13.9161Z" fill="currentColor" stroke="none"/>
  <path d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiUserUser03Solid icon from the solid style in users category.
 */
export default {
  name: 'PiUserUser03Solid',
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
      default: 'user-user-03 icon'
    }
  }
}
</script>
