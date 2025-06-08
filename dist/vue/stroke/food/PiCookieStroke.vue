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
    <path d="M8.40366 8.19263V8.20263M10.7904 17.6838V17.6938M16 4.99996V5.00996M20 4.99996V5.00996M21 8.99996V9.00996M17.0248 9.97516C16.8521 9.99151 16.677 9.99988 16.5 9.99988C13.4624 9.99988 11 7.53744 11 4.49988C11 3.99272 11.0686 3.50159 11.1971 3.03528C6.60269 3.44143 3 7.29996 3 12C3 16.9705 7.02944 21 12 21C16.3031 21 19.9008 17.9801 20.7895 13.9441C18.7955 13.6278 17.2375 12.0018 17.0248 9.97516ZM9 13.0178C9 13.5701 8.55228 14.0178 8 14.0178C7.44772 14.0178 7 13.5701 7 13.0178C7 12.4655 7.44772 12.0178 8 12.0178C8.55228 12.0178 9 12.4655 9 13.0178ZM15.7172 14.7662C15.7172 15.3184 15.2695 15.7662 14.7172 15.7662C14.1649 15.7662 13.7172 15.3184 13.7172 14.7662C13.7172 14.2139 14.1649 13.7662 14.7172 13.7662C15.2695 13.7662 15.7172 14.2139 15.7172 14.7662Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCookieStroke icon from the stroke style in food category.
 */
export default {
  name: 'PiCookieStroke',
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
      default: 'cookie icon'
    }
  }
}
</script>
