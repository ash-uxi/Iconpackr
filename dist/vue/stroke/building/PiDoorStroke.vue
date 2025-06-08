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
    <path d="M10 12H8" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M2 21H22" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M5 21V7C5 5.59987 5 4.8998 5.27248 4.36502C5.51217 3.89462 5.89462 3.51217 6.36502 3.27248C6.8998 3 7.59987 3 9 3H15C16.4001 3 17.1002 3 17.635 3.27248C18.1054 3.51217 18.4878 3.89462 18.7275 4.36502C19 4.8998 19 5.59987 19 7V21" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M9 12C9 12.2761 8.77614 12.5 8.5 12.5C8.22386 12.5 8 12.2761 8 12C8 11.7239 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.7239 9 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDoorStroke icon from the stroke style in building category.
 */
export default {
  name: 'PiDoorStroke',
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
      default: 'door icon'
    }
  }
}
</script>
