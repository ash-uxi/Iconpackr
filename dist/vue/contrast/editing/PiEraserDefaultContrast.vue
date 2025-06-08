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
    <path d="m14.268 17.292-.907.908c-1.27 1.27-1.905 1.905-2.638 2.143-.644.21-1.338.21-1.982 0-.733-.238-1.368-.873-2.638-2.143l-.303-.303c-1.27-1.27-1.905-1.905-2.143-2.638a3.2 3.2 0 0 1 0-1.982c.238-.732.873-1.368 2.143-2.638l.908-.907m7.56 7.56 3.932-3.931c1.27-1.27 1.905-1.905 2.143-2.638.21-.644.21-1.338 0-1.982-.238-.733-.873-1.368-2.143-2.638l-.303-.303c-1.27-1.27-1.905-1.905-2.638-2.143a3.2 3.2 0 0 0-1.982 0c-.732.238-1.368.873-2.638 2.143L6.708 9.732m7.56 7.56-7.56-7.56"/>
  <path fill="currentColor" d="m17.898 5.8.302.303c1.27 1.27 1.905 1.905 2.143 2.638.21.644.21 1.338 0 1.982-.238.732-.873 1.368-2.143 2.638l-3.224 3.224-7.561-7.56L10.639 5.8c1.27-1.27 1.906-1.905 2.638-2.143a3.2 3.2 0 0 1 1.983 0c.732.238 1.367.873 2.638 2.143" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiEraserDefaultContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiEraserDefaultContrast',
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
      default: 'eraser-default icon'
    }
  }
}
</script>
