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
    <path d="M10.333 13.667H8.667a1.667 1.667 0 1 0 1.666 1.666zm0 0h3.334m-3.334 0v-3.334m3.334 3.334h1.666a1.667 1.667 0 1 1-1.666 1.666zm0 0v-3.334m0 0V8.667a1.667 1.667 0 1 1 1.666 1.666zm0 0h-3.334m0 0H8.667a1.667 1.667 0 1 1 1.666-1.666zM21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiCommandCmdCircleContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiCommandCmdCircleContrast',
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
      default: 'command-cmd-circle icon'
    }
  }
}
</script>
