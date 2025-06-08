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
    <path fill="currentColor" d="M12 5a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9" opacity=".28"/>
  <path d="M12 5a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m0 0V2m0 19v-1m4.5-.134L16 19m-8.5.866L8 19m7-5a3 3 0 1 1-6 0z"/>
  </svg>
</template>

<script>
/**
 * PiCeilingLampOnContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiCeilingLampOnContrast',
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
      default: 'ceiling-lamp-on icon'
    }
  }
}
</script>
