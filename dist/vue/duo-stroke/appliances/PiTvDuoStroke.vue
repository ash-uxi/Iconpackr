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
    <path  d="m17.465 19 1.703 2.555a1 1 0 1 0 1.664-1.11L19.87 19h-2.404" fill="none"/>
  <path d="M2 6.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C3.139 4 3.559 4 4.4 4h15.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v9.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H4.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 16.861 2 16.441 2 15.6z" opacity=".28" fill="none"/>
  <path  d="m4.132 19-.964 1.445a1 1 0 0 0 1.664 1.11L6.535 19H4.132" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTvDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiTvDuoStroke',
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
      default: 'tv icon'
    }
  }
}
</script>
