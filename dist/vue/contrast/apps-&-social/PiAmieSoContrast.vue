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
    <path d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0"/>
  <path fill="currentColor" d="M8.21 21c1.494 0 2.84-.628 3.79-1.634A5.21 5.21 0 1 0 19.366 12 5.21 5.21 0 1 0 12 4.634 5.21 5.21 0 1 0 4.634 12a5.21 5.21 0 0 0 3.576 9" opacity=".28"/>
  <path d="M8.21 21c1.494 0 2.84-.628 3.79-1.634A5.21 5.21 0 1 0 19.366 12 5.21 5.21 0 1 0 12 4.634 5.21 5.21 0 1 0 4.634 12a5.21 5.21 0 0 0 3.576 9"/>
  </svg>
</template>

<script>
/**
 * PiAmieSoContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiAmieSoContrast',
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
      default: 'amie-so icon'
    }
  }
}
</script>
