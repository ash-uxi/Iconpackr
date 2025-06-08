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
    <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
  <path d="m8.386 10.005 1.228-.86m4.771 0 1.229.86M8.429 16A4.99 4.99 0 0 1 12 14.5c1.4 0 2.664.574 3.572 1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  </svg>
</template>

<script>
/**
 * PiFaceSadDisappointedContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiFaceSadDisappointedContrast',
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
      default: 'face-sad-disappointed icon'
    }
  }
}
</script>
