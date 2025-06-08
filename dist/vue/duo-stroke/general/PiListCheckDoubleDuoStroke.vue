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
    <path d="M12 12H21M12 18H21M12 6L21 6" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3 8.10466L4.89736 10C5.80992 8.40431 7.07282 7.0366 8.59087 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListCheckDoubleDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiListCheckDoubleDuoStroke',
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
      default: 'list-check-double icon'
    }
  }
}
</script>
