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
    <path d="M12 20.875V17m0 3.875c-1.75 0-3.5.375-5 1.125m5-1.125c1.75 0 3.5.375 5 1.125m-5-5h7.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 2 20.441 2 19.6 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163z"/>
  <path fill="currentColor" d="M2 4.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C3.139 2 3.559 2 4.4 2h15.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v10.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H4.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 15.861 2 15.441 2 14.6z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiMonitor02Contrast icon from the contrast style in devices category.
 */
export default {
  name: 'PiMonitor02Contrast',
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
      default: 'monitor-02 icon'
    }
  }
}
</script>
