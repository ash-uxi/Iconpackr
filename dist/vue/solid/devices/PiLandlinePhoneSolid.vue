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
    <path d="M19 3C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H11C10.4477 21 10 20.5523 10 20V4L10.0049 3.89746C10.0562 3.39333 10.4823 3 11 3H19ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H14.5C15.0523 18 15.5 17.5523 15.5 17C15.5 16.4477 15.0523 16 14.5 16H13ZM17.5 16C16.9477 16 16.5 16.4477 16.5 17C16.5 17.5523 16.9477 18 17.5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H17.5ZM13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15H14.5C15.0523 15 15.5 14.5523 15.5 14C15.5 13.4477 15.0523 13 14.5 13H13ZM17.5 13C16.9477 13 16.5 13.4477 16.5 14C16.5 14.5523 16.9477 15 17.5 15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H17.5ZM13 5C12.4823 5 12.0562 5.39333 12.0049 5.89746L12 6V10C12 10.5523 12.4477 11 13 11H19C19.5523 11 20 10.5523 20 10V6C20 5.48232 19.6067 5.05621 19.1025 5.00488L19 5H13Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M6.5 2C7.88071 2 9 3.11929 9 4.5V19.5C9 20.8807 7.88071 22 6.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5C2 3.11929 3.11929 2 4.5 2H6.5Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiLandlinePhoneSolid icon from the solid style in devices category.
 */
export default {
  name: 'PiLandlinePhoneSolid',
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
      default: 'landline-phone icon'
    }
  }
}
</script>
