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
    <path d="M10.112 12.828a4 4 0 1 1-5.657 5.657 4 4 0 0 1 5.657-5.657m0 0 8.485-8.485 2.121 2.121m-4.95.708 1.415 1.414"/>
  <path fill="currentColor" d="M4.455 18.485a4 4 0 1 0 5.657-5.656 4 4 0 0 0-5.657 5.656" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiKeySlantContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiKeySlantContrast',
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
      default: 'key-slant icon'
    }
  }
}
</script>
