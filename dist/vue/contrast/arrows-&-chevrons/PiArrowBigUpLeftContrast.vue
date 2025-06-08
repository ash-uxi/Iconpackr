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
    <path fill="currentColor" d="m16.784 18.764 1.98-1.98c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.23-.272-.427-.668-.823l-7.017-7.016a61 61 0 0 1 3.062-2.595 35.3 35.3 0 0 0-9.097-.178 1.11 1.11 0 0 0-.98.98 35.2 35.2 0 0 0 .177 9.097 61 61 0 0 1 2.595-3.062l7.017 7.017c.395.396.593.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668" opacity=".28"/>
  <path d="m18.764 16.784-1.98 1.98c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.229-.074-.427-.272-.823-.668l-7.017-7.017A61 61 0 0 0 4.91 14.81a35.3 35.3 0 0 1-.178-9.096 1.11 1.11 0 0 1 .98-.98 35.3 35.3 0 0 1 9.097.177 61 61 0 0 0-3.062 2.594l7.017 7.017c.396.396.594.594.668.823a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822"/>
  </svg>
</template>

<script>
/**
 * PiArrowBigUpLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowBigUpLeftContrast',
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
      default: 'arrow-big-up-left icon'
    }
  }
}
</script>
