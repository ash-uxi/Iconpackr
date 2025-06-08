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
    <path d="M15.5 14a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
  <path d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611"/>
  <path fill="currentColor" fill-rule="evenodd" d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611M12 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" clip-rule="evenodd" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiEggBoiledContrast icon from the contrast style in food category.
 */
export default {
  name: 'PiEggBoiledContrast',
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
      default: 'egg-boiled icon'
    }
  }
}
</script>
