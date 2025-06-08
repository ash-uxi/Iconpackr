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
    <path d="M6.727 4.33A2 2 0 0 1 8.612 3h6.777a2 2 0 0 1 1.884 1.33L20 12H4zM8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8z"/>
  </g>
  <path d="M12 18v-6m-3 9h6m5-9-2.727-7.67A2 2 0 0 0 15.389 3H8.612a2 2 0 0 0-1.885 1.33L4 12zm-4 9v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1z"/>
  </svg>
</template>

<script>
/**
 * PiTableLampOffContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiTableLampOffContrast',
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
      default: 'table-lamp-off icon'
    }
  }
}
</script>
