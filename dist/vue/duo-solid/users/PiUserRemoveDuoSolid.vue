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
    <path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" :fill="color || 'currentColor'" /> <path d="M15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H15Z" :fill="color || 'currentColor'" /> <path d="M2 19C2 16.2386 4.23858 14 7 14H12.1707C12.0602 14.3128 12 14.6494 12 15C12 16.6569 13.3431 18 15 18H19.9C19.9656 18.3231 20 18.6575 20 19C20 20.6569 18.6569 22 17 22H5C3.34315 22 2 20.6569 2 19Z" :fill="color || 'currentColor'" opacity="0.28" />
  </svg>
</template>

<script>
/**
 * PiUserRemoveDuoSolid icon from the duo-solid style in users category.
 */
export default {
  name: 'PiUserRemoveDuoSolid',
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
      default: 'user-remove icon'
    }
  }
}
</script>
