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
    <path d="M12 20a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 8v2m4-15v5a4 4 0 0 1-8 0V7a4 4 0 1 1 8 0"/>
  <path fill="currentColor" d="M8 7a4 4 0 1 1 8 0v5a4 4 0 0 1-8 0z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiMicOnContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiMicOnContrast',
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
      default: 'mic-on icon'
    }
  }
}
</script>
