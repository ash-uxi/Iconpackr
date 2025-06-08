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
    <path fill="currentColor" d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".28"/>
  <path d="M3 14c0-2.187 2.7-7 9-7s9 4.813 9 7m-6 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </svg>
</template>

<script>
/**
 * PiEye02OnContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiEye02OnContrast',
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
      default: 'eye-02-on icon'
    }
  }
}
</script>
