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
    <path d="M19 10L19 5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V10M19 10L19 18.8C19 19.9201 19 20.4802 18.782 20.908C18.5903 21.2843 18.2843 21.5903 17.908 21.782C17.4802 22 16.9201 22 15.8 22H8.2C7.0799 22 6.51984 22 6.09202 21.782C5.71569 21.5903 5.40973 21.2843 5.21799 20.908C5 20.4802 5 19.9201 5 18.8V10M19 10H5" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8 5.5V6.5M8 13.5V15.5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiRefrigeratorDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiRefrigeratorDuoStroke',
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
      default: 'refrigerator icon'
    }
  }
}
</script>
