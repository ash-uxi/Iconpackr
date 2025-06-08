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
    <path d="m14.227 9.774 4.03 4.455c.387-2.588.438-5.208.152-7.797a.95.95 0 0 0-.84-.84 30.2 30.2 0 0 0-7.797.151zm0 0L5.409 18.59"/>
  <path fill="currentColor" d="M18.409 6.432c.286 2.589.235 5.21-.152 7.797l-4.03-4.455-4.456-4.03a30.2 30.2 0 0 1 7.797-.153.95.95 0 0 1 .84.84" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiArrowRightUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowRightUpContrast',
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
      default: 'arrow-right-up icon'
    }
  }
}
</script>
