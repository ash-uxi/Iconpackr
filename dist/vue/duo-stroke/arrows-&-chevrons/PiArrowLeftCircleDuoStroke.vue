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
    <path d="M11.9486 16C10.5241 14.963 9.24467 13.7515 8.1419 12.3962C8.0473 12.28 8 12.14 8 12M11.9486 8C10.5241 9.03704 9.24467 10.2485 8.1419 11.6038C8.0473 11.72 8 11.86 8 12M8 12L16 12" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21.1501 11.9999C21.1501 6.94645 17.0535 2.84985 12.0001 2.84985C6.94669 2.84985 2.8501 6.94645 2.8501 11.9999C2.8501 17.0533 6.94669 21.1499 12.0001 21.1499C17.0535 21.1499 21.1501 17.0533 21.1501 11.9999Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftCircleDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftCircleDuoStroke',
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
      default: 'arrow-left-circle icon'
    }
  }
}
</script>
