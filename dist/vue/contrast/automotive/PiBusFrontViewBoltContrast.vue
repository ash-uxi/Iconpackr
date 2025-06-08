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
    <path d="M12 8.5 9.846 12h4.308L12 15.5M4 9H2.5a.5.5 0 0 1-.5-.5V8a3 3 0 0 1 2.5-2.958M20 9h1.5a.5.5 0 0 0 .5-.5V8a3 3 0 0 0-2.5-2.958"/>
  <path fill="currentColor" d="M4 9.333c0-2.177 0-3.266.413-4.102A4 4 0 0 1 6.23 3.413C7.067 3 8.156 3 10.333 3h3.334c2.177 0 3.266 0 4.102.413a4 4 0 0 1 1.819 1.818C20 6.067 20 7.156 20 9.333V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0z" opacity=".28"/>
  <path d="M4 9.333c0-2.177 0-3.266.413-4.102A4 4 0 0 1 6.23 3.413C7.067 3 8.156 3 10.333 3h3.334c2.177 0 3.266 0 4.102.413a4 4 0 0 1 1.819 1.818C20 6.067 20 7.156 20 9.333V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0z"/>
  </svg>
</template>

<script>
/**
 * PiBusFrontViewBoltContrast icon from the contrast style in automotive category.
 */
export default {
  name: 'PiBusFrontViewBoltContrast',
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
      default: 'bus-front-view-bolt icon'
    }
  }
}
</script>
