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
    <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9 6.81153C9.74024 5.82454 10.599 4.93322 11.5564 4.15739C11.6859 4.05246 11.843 4 12 4M15 6.81153C14.2598 5.82454 13.401 4.93322 12.4436 4.15739C12.3141 4.05246 12.157 4 12 4M12 4V15" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUploadUpDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiUploadUpDuoStroke',
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
      default: 'upload-up icon'
    }
  }
}
</script>
