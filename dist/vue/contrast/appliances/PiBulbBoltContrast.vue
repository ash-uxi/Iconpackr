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
    <path d="M10 22h4M12.385 6.7l-1.836 2.7c-.121.162-.006.373.224.41l2.454.398c.228.037.344.245.226.409l-2.086 2.682M5 9.737C5 6.017 8.134 3 12 3s7 3.016 7 6.737c0 2.04-.942 3.867-2.43 5.103-.628.521-1.168 1.17-1.373 1.96l-.28 1.077A1.5 1.5 0 0 1 13.465 19h-2.93a1.5 1.5 0 0 1-1.452-1.123l-.28-1.077c-.205-.79-.745-1.439-1.374-1.96C5.942 13.604 5 11.776 5 9.737"/>
  <path fill="currentColor" d="M12 3C8.134 3 5 6.016 5 9.737c0 2.04.942 3.867 2.43 5.103.628.521 1.168 1.17 1.373 1.96l.28 1.077A1.5 1.5 0 0 0 10.535 19h2.93a1.5 1.5 0 0 0 1.452-1.123l.28-1.077c.205-.79.745-1.439 1.374-1.96C18.058 13.604 19 11.776 19 9.737 19 6.017 15.866 3 12 3" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiBulbBoltContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiBulbBoltContrast',
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
      default: 'bulb-bolt icon'
    }
  }
}
</script>
