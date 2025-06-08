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
    <path d="M11.5 6h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"/>
  <path fill="currentColor" d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" opacity=".28"/>
  <path d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M18 4l2.414 2.414A2 2 0 0 1 21 7.828V18.5a1.5 1.5 0 0 1-3 0v-1a2.5 2.5 0 0 0-2.5-2.5H15"/>
  <path d="M19.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  </svg>
</template>

<script>
/**
 * PiFuelPumpGasContrast icon from the contrast style in automotive category.
 */
export default {
  name: 'PiFuelPumpGasContrast',
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
      default: 'fuel-pump-gas icon'
    }
  }
}
</script>
