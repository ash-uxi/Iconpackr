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
    <path d="M22 12V18M2 19L6.35782 6.15727C6.60568 5.46327 7.26306 5 8 5C8.75748 5 9.42832 5.48902 9.66011 6.21016L14 19M4.03593 13H11.9641M22 15C22 16.6569 20.6569 18 19 18C17.3431 18 16 16.6569 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFontAaStroke icon from the stroke style in editing category.
 */
export default {
  name: 'PiFontAaStroke',
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
      default: 'font-aa icon'
    }
  }
}
</script>
