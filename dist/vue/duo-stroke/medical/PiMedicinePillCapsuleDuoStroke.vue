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
    <path d="M15.7138 15.7136L8.28662 8.28644M13.4085 8.47029L15.1763 6.70252C15.6381 6.24071 16.3261 6.14297 16.8837 6.40932" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4.22181 19.7783C2.17085 17.7273 2.17085 14.4021 4.22181 12.3511L12.351 4.22194C14.4019 2.17098 17.7272 2.17098 19.7782 4.22194C21.8291 6.2729 21.8291 9.59816 19.7782 11.6491L11.649 19.7783C9.59804 21.8292 6.27277 21.8292 4.22181 19.7783Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMedicinePillCapsuleDuoStroke icon from the duo-stroke style in medical category.
 */
export default {
  name: 'PiMedicinePillCapsuleDuoStroke',
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
