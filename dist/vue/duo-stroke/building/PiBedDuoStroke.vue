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
    <path d="M3 18H21" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 20V15C3 13.5999 3 12.8998 3.27248 12.365C3.51217 11.8946 3.89462 11.5122 4.36502 11.2725C4.8998 11 5.59987 11 7 11H17C18.4001 11 19.1002 11 19.635 11.2725C20.1054 11.5122 20.4878 11.8946 20.7275 12.365C21 12.8998 21 13.5999 21 15V20" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5 11V9.2C5 8.0799 5 7.51984 5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799C6.51984 6 7.0799 6 8.2 6H12M19 11V9.2C19 8.0799 19 7.51984 18.782 7.09202C18.5903 6.71569 18.2843 6.40973 17.908 6.21799C17.4802 6 16.9201 6 15.8 6H12M12 6L12.0006 11" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBedDuoStroke icon from the duo-stroke style in building category.
 */
export default {
  name: 'PiBedDuoStroke',
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
      default: 'bed icon'
    }
  }
}
</script>
