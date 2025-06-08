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
    <path d="M13 12C13 9.79086 11.2091 8 9 8C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16C11.2091 16 13 14.2091 13 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M15 5H9C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiToggleOffStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiToggleOffStroke',
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
