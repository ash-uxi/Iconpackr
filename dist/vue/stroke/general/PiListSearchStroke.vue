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
    <path d="M4 12H10M4 18H10M4 6H20M21 18.5L19.6214 17.1214M19.6214 17.1214C20.1657 16.5771 20.5 15.8271 20.5 15C20.5 13.3414 19.1586 12 17.5 12C15.8414 12 14.5 13.3414 14.5 15C14.5 16.6586 15.8414 18 17.5 18C18.3272 18 19.0771 17.6657 19.6214 17.1214Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListSearchStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiListSearchStroke',
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
      default: 'list-search icon'
    }
  }
}
</script>
