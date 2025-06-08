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
    <g opacity="0.28"><path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z" :fill="color || 'currentColor'" /><path d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H4Z" :fill="color || 'currentColor'" /><path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H4Z" :fill="color || 'currentColor'" /></g> <path d="M20 11.5C20 10.9477 19.5523 10.5 19 10.5C18.4477 10.5 18 10.9477 18 11.5V15.4C17.6693 15.3706 17.3337 15.3311 16.9832 15.2898C16.7006 15.2565 16.4082 15.222 16.1009 15.1908C15.7059 15.1508 15.3246 15.3482 15.1293 15.6939C14.934 16.0396 14.9618 16.4681 15.2 16.7857C15.9896 17.8385 16.9056 18.7893 17.9269 19.6168C18.2392 19.8699 18.6199 19.9973 19 19.9973C19.3801 19.9973 19.7608 19.8699 20.0731 19.6168C21.0944 18.7893 22.0104 17.8385 22.8 16.7857C23.0382 16.4681 23.066 16.0396 22.8707 15.6939C22.6754 15.3482 22.2941 15.1508 21.8991 15.1908C21.5918 15.222 21.2995 15.2565 21.0168 15.2898C20.6664 15.3311 20.3308 15.3706 20 15.4V11.5Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiListArrowDownDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiListArrowDownDuoSolid',
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
      default: 'list-arrow-down icon'
    }
  }
}
</script>
