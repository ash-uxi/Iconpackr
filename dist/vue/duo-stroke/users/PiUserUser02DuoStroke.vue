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
    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M7.27466 21H16.7253C18.5339 21 20 19.5339 20 17.7254C20 15.439 17.7163 13.8564 15.5755 14.6592L13.6502 15.3812C12.5862 15.7802 11.4138 15.7802 10.3498 15.3812L8.42447 14.6592C6.28366 13.8564 4 15.439 4 17.7254C4 19.5339 5.46612 21 7.27466 21Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserUser02DuoStroke icon from the duo-stroke style in users category.
 */
export default {
  name: 'PiUserUser02DuoStroke',
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
      default: 'user-user-02 icon'
    }
  }
}
</script>
