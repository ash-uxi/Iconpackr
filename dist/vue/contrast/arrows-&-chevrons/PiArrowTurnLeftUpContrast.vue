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
    <path fill="currentColor" d="M4 8.859a25.2 25.2 0 0 1 4.505-4.684.79.79 0 0 1 .99 0A25.2 25.2 0 0 1 14 8.859c-.935-.16-1.402-.241-1.87-.303a24 24 0 0 0-6.26 0c-.468.062-.935.142-1.87.303" opacity=".28"/>
  <path d="M9 8.351V12c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C12.8 20 14.2 20 17 20h3M9 8.351a24 24 0 0 0-3.13.205c-.468.062-.935.142-1.87.303a25.2 25.2 0 0 1 4.505-4.684.79.79 0 0 1 .99 0A25.2 25.2 0 0 1 14 8.859c-.935-.16-1.402-.241-1.87-.303A24 24 0 0 0 9 8.351"/>
  </svg>
</template>

<script>
/**
 * PiArrowTurnLeftUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnLeftUpContrast',
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
      default: 'arrow-turn-left-up icon'
    }
  }
}
</script>
