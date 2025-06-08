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
    <path d="M13.5 14.9778L15.8412 17.3165C16.9672 15.3476 18.5256 13.6599 20.3987 12.3809" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListCheckDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiListCheckDuoStroke',
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
      default: 'list-check icon'
    }
  }
}
</script>
