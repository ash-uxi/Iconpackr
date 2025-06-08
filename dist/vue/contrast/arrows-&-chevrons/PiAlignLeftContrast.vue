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
    <path d="M11.866 12H20m-8.134 0q0 2.044.165 4.083a20.8 20.8 0 0 1-3.886-3.678.64.64 0 0 1 0-.81 20.8 20.8 0 0 1 3.886-3.678A51 51 0 0 0 11.866 12M4 19V5"/>
  <path fill="currentColor" d="M8.145 12.404a20.8 20.8 0 0 0 3.886 3.68 50.6 50.6 0 0 1 0-8.167 20.8 20.8 0 0 0-3.886 3.678.64.64 0 0 0 0 .81" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiAlignLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiAlignLeftContrast',
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
      default: 'align-left icon'
    }
  }
}
</script>
