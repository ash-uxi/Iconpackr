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
    <path fill="currentColor" d="M18.832 6.396a15 15 0 0 0-1.049-3.726l-.242.539a24 24 0 0 1-2.412 4.177l-.346.48a15 15 0 0 0 3.57-.884c.264-.101.528-.251.479-.586" opacity=".28"/>
  <path d="M19.748 14a8 8 0 1 1-3.302-8.652m0 0q.6-1.042 1.095-2.139l.242-.54a15 15 0 0 1 1.049 3.727c.049.335-.215.485-.479.586-1.148.44-2.347.737-3.57.884l.346-.48q.71-.986 1.317-2.038"/>
  </svg>
</template>

<script>
/**
 * PiRotateRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiRotateRightContrast',
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
      default: 'rotate-right icon'
    }
  }
}
</script>
