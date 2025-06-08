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
    <path d="M20.923 14.574c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42l-6.272-2.966c-.736-.348-1.104-.522-1.222-.757m10.352-.777 6.272-2.966c.736-.348 1.104-.522 1.222-.757a.72.72 0 0 0 0-.648c-.118-.235-.486-.41-1.222-.757l-6.272-2.966c-.524-.248-.786-.372-1.06-.42a2.1 2.1 0 0 0-.737 0c-.275.048-.537.172-1.061.42L4.299 8.669c-.736.348-1.104.522-1.222.757a.72.72 0 0 0 0 .648c.118.235.486.41 1.222.757l6.272 2.966c.524.248.786.372 1.06.42.244.044.494.044.737 0 .275-.048.537-.172 1.061-.42"/>
  <path fill="currentColor" d="M4.3 10.831c-.737-.348-1.105-.522-1.223-.757a.72.72 0 0 1 0-.648c.118-.235.486-.41 1.222-.757l6.272-2.966c.524-.248.786-.372 1.06-.42a2.1 2.1 0 0 1 .737 0c.275.048.537.172 1.061.42l6.272 2.966c.736.348 1.104.522 1.222.757a.72.72 0 0 1 0 .648c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiLayerTwoContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiLayerTwoContrast',
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
      default: 'layer-two icon'
    }
  }
}
</script>
