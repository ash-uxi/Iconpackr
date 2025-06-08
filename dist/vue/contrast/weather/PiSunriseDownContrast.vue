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
    <path fill="currentColor" fill-rule="evenodd" d="M16.004 20.996a5 5 0 1 0-8.012-.007z" clip-rule="evenodd" opacity=".28"/>
  <path d="M16.004 20.996a5 5 0 1 0-8.012-.007m8.012.007-8.013-.007m8.013.007L21 21m-13.009-.011L3 20.984M9.557 6.71c.602.804 1.302 1.53 2.082 2.162A.57.57 0 0 0 12 9m2.443-2.29a12.2 12.2 0 0 1-2.082 2.162A.57.57 0 0 1 12 9m0 0V3M2 17h1m18 0h1M4.472 10.422l.753.658m14.31-.658-.754.658"/>
  </svg>
</template>

<script>
/**
 * PiSunriseDownContrast icon from the contrast style in weather category.
 */
export default {
  name: 'PiSunriseDownContrast',
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
      default: 'sunrise-down icon'
    }
  }
}
</script>
