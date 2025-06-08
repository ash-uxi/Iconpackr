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
    <path d="M10.4023 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H9.21484" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M17 21.3193C17.4 21.3193 21 19.375 21 16.6528C21 15.2918 19.8 14.3365 18.6 14.3196C18 14.3111 17.4 14.514 17 15.0973C16.6 14.514 15.9896 14.3196 15.4 14.3196C14.2 14.3196 13 15.2918 13 16.6528C13 19.375 16.6 21.3193 17 21.3193Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserLoveHeartDuoStroke icon from the duo-stroke style in users category.
 */
export default {
  name: 'PiUserLoveHeartDuoStroke',
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
      default: 'user-love-heart icon'
    }
  }
}
</script>
