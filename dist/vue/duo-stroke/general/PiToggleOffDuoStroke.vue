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
    <path d="M5 12C5 9.79086 6.79086 8 9 8C11.2091 8 13 9.79086 13 12C13 14.2091 11.2091 16 9 16C6.79086 16 5 14.2091 5 12Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M9 5H15C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiToggleOffDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiToggleOffDuoStroke',
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
      default: 'toggle-off icon'
    }
  }
}
</script>
