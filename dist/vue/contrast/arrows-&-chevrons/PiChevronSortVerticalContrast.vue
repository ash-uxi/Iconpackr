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
    <path d="M12.298 5.106A20.4 20.4 0 0 1 16 9c-2.663-.2-5.337-.2-8 0a20.4 20.4 0 0 1 3.702-3.894.47.47 0 0 1 .596 0M11.702 18.894A20.4 20.4 0 0 1 8 15c2.663.2 5.337.2 8 0a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"/>
  </g>
  <path d="M11.702 18.894A20.4 20.4 0 0 1 8 15c2.663.2 5.337.2 8 0a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M12.298 5.106A20.4 20.4 0 0 1 16 9c-2.663-.2-5.337-.2-8 0a20.4 20.4 0 0 1 3.702-3.894.47.47 0 0 1 .596 0"/>
  </svg>
</template>

<script>
/**
 * PiChevronSortVerticalContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronSortVerticalContrast',
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
      default: 'chevron-sort-vertical icon'
    }
  }
}
</script>
