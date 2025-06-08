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
    <path d="M12 21.5V5.06641" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M2 20.5664V5.06641C4.99481 3.35509 8.9751 3.96646 12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5C9.06309 20.165 5.19684 19.1964 2 20.5664Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiNotebookDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiNotebookDuoStroke',
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
      default: 'notebook icon'
    }
  }
}
</script>
