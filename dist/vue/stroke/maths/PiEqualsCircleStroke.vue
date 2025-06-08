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
    <path d="M9.00012 10H15.0001M9.00012 14H15.0001M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiEqualsCircleStroke icon from the stroke style in maths category.
 */
export default {
  name: 'PiEqualsCircleStroke',
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
      default: 'equals-circle icon'
    }
  }
}
</script>
