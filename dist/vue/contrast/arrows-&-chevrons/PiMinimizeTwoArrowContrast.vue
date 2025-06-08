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
    <g fill="currentColor" opacity=".28">
    <path d="M10.347 13.087A20.8 20.8 0 0 0 5 13.29l1.73 1.493c.89.767 1.72 1.599 2.488 2.487L10.71 19c.298-1.779.366-3.576.202-5.347a.625.625 0 0 0-.566-.566M13.653 10.913c1.771.164 3.568.096 5.347-.202l-1.73-1.493a24 24 0 0 1-2.488-2.487L13.29 5a20.8 20.8 0 0 0-.202 5.347.625.625 0 0 0 .566.566"/>
  </g>
  <path d="M10.347 13.087A20.8 20.8 0 0 0 5 13.29l1.73 1.493c.89.767 1.72 1.599 2.488 2.487L10.71 19c.298-1.779.366-3.576.202-5.347a.625.625 0 0 0-.566-.566M13.653 10.913c1.771.164 3.568.096 5.347-.202l-1.73-1.493a24 24 0 0 1-2.488-2.487L13.29 5a20.8 20.8 0 0 0-.202 5.347.625.625 0 0 0 .566.566"/>
  </svg>
</template>

<script>
/**
 * PiMinimizeTwoArrowContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiMinimizeTwoArrowContrast',
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
      default: 'minimize-two-arrow icon'
    }
  }
}
</script>
