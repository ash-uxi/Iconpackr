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
    <path d="M18.4694 18.4701L5.5293 5.53003" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M2.85059 12.0001C2.85059 17.0535 6.94718 21.1501 12.0006 21.1501C17.054 21.1501 21.1506 17.0535 21.1506 12.0001C21.1506 6.94669 17.054 2.8501 12.0006 2.8501C6.94718 2.8501 2.85059 6.94669 2.85059 12.0001Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBanLeftDuoStroke icon from the duo-stroke style in security category.
 */
export default {
  name: 'PiBanLeftDuoStroke',
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
      default: 'ban-left icon'
    }
  }
}
</script>
