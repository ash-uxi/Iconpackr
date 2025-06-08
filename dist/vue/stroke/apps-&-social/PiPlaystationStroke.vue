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
    <path d="M8.04029 13.872L3.8404 15.775C-0.211804 17.3258 3.14503 21.098 7.00493 19.8503L8.04029 19.4288M13.9984 16.1633L16.9493 15.0843C20.6353 13.7812 24.3106 17.6919 20.1692 19.1595L13.9984 21.1264M15 10.8415L16.5768 11.3582C21.1305 12.6043 21.2536 5.18607 16.5768 3.78303L11 2V22" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPlaystationStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiPlaystationStroke',
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
