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
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill="currentColor" d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7" opacity=".28"/>
  <path d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7"/>
  </svg>
</template>

<script>
/**
 * PiEyeOnContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiEyeOnContrast',
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
      default: 'eye-on icon'
    }
  }
}
</script>
