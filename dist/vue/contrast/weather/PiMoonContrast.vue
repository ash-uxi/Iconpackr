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
    <path fill="currentColor" d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z" opacity=".28"/>
  <path d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z"/>
  </svg>
</template>

<script>
/**
 * PiMoonContrast icon from the contrast style in weather category.
 */
export default {
  name: 'PiMoonContrast',
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
      default: 'moon icon'
    }
  }
}
</script>
