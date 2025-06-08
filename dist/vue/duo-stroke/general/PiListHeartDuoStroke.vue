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
    <path d="M17.7143 18.3271C18.0857 18.3271 21.4286 16.5217 21.4286 13.994C21.4286 12.7301 20.3143 11.8431 19.2 11.8274C18.6429 11.8195 18.0857 12.0079 17.7143 12.5496C17.3429 12.0079 16.7761 11.8274 16.2286 11.8274C15.1143 11.8274 14 12.7301 14 13.994C14 16.5217 17.3429 18.3271 17.7143 18.3271Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListHeartDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiListHeartDuoStroke',
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
