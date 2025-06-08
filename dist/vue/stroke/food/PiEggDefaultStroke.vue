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
    <path d="M19.3891 14.1111C19.3891 18.1919 16.081 21.5 12.0002 21.5C7.91945 21.5 4.61133 18.1919 4.61133 14.1111C4.61133 10.0303 7.91945 2.5 12.0002 2.5C16.081 2.5 19.3891 10.0303 19.3891 14.1111Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiEggDefaultStroke icon from the stroke style in food category.
 */
export default {
  name: 'PiEggDefaultStroke',
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
      default: 'egg-default icon'
    }
  }
}
</script>
