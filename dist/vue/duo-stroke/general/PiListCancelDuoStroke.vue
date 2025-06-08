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
    <path d="M14.5 17.4971L17 14.9971M17 14.9971L19.5 12.4971M17 14.9971L14.5 12.4971M17 14.9971L19.5 17.4971" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListCancelDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiListCancelDuoStroke',
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
      default: 'list-cancel icon'
    }
  }
}
</script>
