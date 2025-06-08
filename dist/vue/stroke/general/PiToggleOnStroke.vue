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
    <path d="M11 12C11 9.79086 12.7909 8 15 8C17.2091 8 19 9.79086 19 12C19 14.2091 17.2091 16 15 16C12.7909 16 11 14.2091 11 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M9 5H15C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiToggleOnStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiToggleOnStroke',
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
      default: 'toggle-on icon'
    }
  }
}
</script>
