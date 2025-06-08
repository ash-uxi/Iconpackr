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
    <path d="M15 10.8415L16.5768 11.3582C21.1305 12.6043 21.2536 5.18607 16.5768 3.78303L11 2V22" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M8.04029 13.8721L3.8404 15.7751C-0.211804 17.3258 3.14503 21.098 7.00493 19.8504L8.04029 19.4288M13.9984 16.1634L16.9493 15.0843C20.6353 13.7813 24.3106 17.692 20.1692 19.1596L13.9984 21.1265" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPlaystationDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiPlaystationDuoStroke',
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
      default: 'playstation icon'
    }
  }
}
</script>
