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
    <g fill="currentColor" opacity=".28">
    <path d="M11 8.15a5.15 5.15 0 1 1 10.3 0 5.15 5.15 0 0 1-10.3 0M5 4.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C5.801 3 6.034 3 6.5 3s.699 0 .883.076a1 1 0 0 1 .54.541C8 3.801 8 4.034 8 4.5v15c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C7.199 21 6.966 21 6.5 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541C5 20.199 5 19.966 5 19.5z"/>
  </g>
  <path d="M11 8.15a5.15 5.15 0 1 1 10.3 0 5.15 5.15 0 0 1-10.3 0M5 4.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C5.801 3 6.034 3 6.5 3s.699 0 .883.076a1 1 0 0 1 .54.541C8 3.801 8 4.034 8 4.5v15c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C7.199 21 6.966 21 6.5 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541C5 20.199 5 19.966 5 19.5z"/>
  </svg>
</template>

<script>
/**
 * PiPatreonOldLogoContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiPatreonOldLogoContrast',
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
      default: 'patreon-old-logo icon'
    }
  }
}
</script>
