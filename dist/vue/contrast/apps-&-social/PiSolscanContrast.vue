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
    <path fill="currentColor" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
  <path d="M19.892 16.636a9.15 9.15 0 1 0-14.856 1.298 9.15 9.15 0 0 0 10.289 2.593M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  </svg>
</template>

<script>
/**
 * PiSolscanContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiSolscanContrast',
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
      default: 'solscan icon'
    }
  }
}
</script>
