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
    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M5.86595 21H18.1341C19.1646 21 20 20.1646 20 19.1341C20 16.0501 17.0608 13.8148 14.0889 14.6387L13.393 14.8317C12.4815 15.0843 11.5185 15.0843 10.607 14.8317L9.91111 14.6387C6.9392 13.8148 4 16.0501 4 19.1341C4 20.1646 4.83541 21 5.86595 21Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserUser03Stroke icon from the stroke style in users category.
 */
export default {
  name: 'PiUserUser03Stroke',
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
      default: 'user-user-03 icon'
    }
  }
}
</script>
