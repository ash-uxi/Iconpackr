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
    <path d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z" fill="currentColor" stroke="none"/>
  <path d="M3 18C3 15.7909 4.79086 14 7 14H17C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiUserUser01Solid icon from the solid style in users category.
 */
export default {
  name: 'PiUserUser01Solid',
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
      default: 'user-user-01 icon'
    }
  }
}
</script>
