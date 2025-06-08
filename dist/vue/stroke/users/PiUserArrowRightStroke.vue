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
    <path d="M12.4 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H12.4M19.1885 21C20.1755 20.2598 21.0668 19.401 21.8426 18.4436C21.9475 18.3141 22 18.157 22 18M19.1885 15C20.1755 15.7402 21.0668 16.599 21.8426 17.5564C21.9475 17.6859 22 17.843 22 18M22 18H15M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserArrowRightStroke icon from the stroke style in users category.
 */
export default {
  name: 'PiUserArrowRightStroke',
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
      default: 'user-arrow-right icon'
    }
  }
}
</script>
