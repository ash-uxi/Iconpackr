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
    <path d="M5 12H19M13.0015 17.0015C13.0015 17.5546 12.5531 18.0029 12 18.0029C11.4469 18.0029 10.9985 17.5546 10.9985 17.0015C10.9985 16.4484 11.4469 16 12 16C12.5531 16 13.0015 16.4484 13.0015 17.0015ZM13.0015 6.99854C13.0015 7.55163 12.5531 8 12 8C11.4469 8 10.9985 7.55163 10.9985 6.99854C10.9985 6.44544 11.4469 5.99707 12 5.99707C12.5531 5.99707 13.0015 6.44544 13.0015 6.99854Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDivideDefaultStroke icon from the stroke style in maths category.
 */
export default {
  name: 'PiDivideDefaultStroke',
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
      default: 'divide-default icon'
    }
  }
}
</script>
