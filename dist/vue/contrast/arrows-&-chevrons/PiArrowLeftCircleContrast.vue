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
    <path d="M11.949 16a20.3 20.3 0 0 1-3.807-3.604A.63.63 0 0 1 8 12m3.949-4a20.3 20.3 0 0 0-3.807 3.604A.63.63 0 0 0 8 12m0 0h8m-4-9.15a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftCircleContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftCircleContrast',
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
