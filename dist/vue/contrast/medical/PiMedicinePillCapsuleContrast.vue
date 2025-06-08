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
    <path fill="currentColor" d="M4.222 19.778a5.25 5.25 0 0 1 0-7.427l8.129-8.13a5.252 5.252 0 0 1 7.427 7.428l-8.129 8.13a5.25 5.25 0 0 1-7.427 0" opacity=".28"/>
  <path d="M8.286 8.287 4.222 12.35a5.252 5.252 0 0 0 7.427 7.427l4.065-4.064M8.286 8.287l4.065-4.065a5.252 5.252 0 0 1 7.427 7.427l-4.064 4.065M8.286 8.287l7.428 7.427M13.408 8.47l1.768-1.767a1.5 1.5 0 0 1 1.707-.294"/>
  </svg>
</template>

<script>
/**
 * PiMedicinePillCapsuleContrast icon from the contrast style in medical category.
 */
export default {
  name: 'PiMedicinePillCapsuleContrast',
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
      default: 'medicine-pill-capsule icon'
    }
  }
}
</script>
