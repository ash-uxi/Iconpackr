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
    <path d="M4 12H10M4 18H10M4 6H20M17.7143 18.3269C17.3429 18.3269 14 16.5214 14 13.9937C14 12.7299 15.1143 11.8271 16.2286 11.8271C16.7761 11.8271 17.3429 12.0077 17.7143 12.5493C18.0857 12.0077 18.6429 11.8193 19.2 11.8271C20.3143 11.8428 21.4286 12.7299 21.4286 13.9937C21.4286 16.5214 18.0857 18.3269 17.7143 18.3269Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListHeartStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiListHeartStroke',
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
      default: 'list-heart icon'
    }
  }
}
</script>
