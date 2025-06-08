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
    <path d="M18.47 5.53A9.15 9.15 0 0 0 5.53 18.47M18.47 5.53A9.15 9.15 0 1 1 5.53 18.47M18.47 5.53 5.53 18.47"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiBanRightContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiBanRightContrast',
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
      default: 'ban-right icon'
    }
  }
}
</script>
