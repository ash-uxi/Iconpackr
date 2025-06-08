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
    <path d="M16.3653 14.4724L18 22C13.7136 19.3358 10.2864 19.3358 6 22L7.63465 14.4724M16.3653 14.4724C17.9712 13.1898 19 11.215 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.215 6.02881 13.1898 7.63465 14.4724M16.3653 14.4724C15.1684 15.4285 13.651 16 12 16C10.349 16 8.83156 15.4285 7.63465 14.4724" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAwardMedalStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiAwardMedalStroke',
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
      default: 'award-medal icon'
    }
  }
}
</script>
