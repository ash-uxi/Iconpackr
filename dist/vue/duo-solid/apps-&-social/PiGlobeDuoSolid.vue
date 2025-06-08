<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path :fill="color || 'currentColor'" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="M2.85 12h18.3M12 2.85A14 14 0 0 1 15.66 12 14 14 0 0 1 12 21.15 14 14 0 0 1 8.34 12 14 14 0 0 1 12 2.85" />
  </svg>
</template>

<script>
/**
 * PiGlobeDuoSolid icon from the duo-solid style in apps-&-social category.
 */
export default {
  name: 'PiGlobeDuoSolid',
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
      default: 'globe icon'
    }
  }
}
</script>
