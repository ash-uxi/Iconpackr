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
    <path d="M15 17C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17ZM15 17V10" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5V15.3542C11.3776 16.0593 11 16.9856 11 18C11 20.2091 12.7909 22 15 22C17.2091 22 19 20.2091 19 18C19 16.9856 18.6224 16.0593 18 15.3542V5Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M4.99999 9.99998V6.99999M4.99999 6.99999V4M4.99999 6.99999H2M4.99999 6.99999H7.99999" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiThermometerAddDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiThermometerAddDuoStroke',
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
      default: 'thermometer-add icon'
    }
  }
}
</script>
