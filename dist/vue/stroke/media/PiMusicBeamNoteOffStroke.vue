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
    <path d="M22 2.29609L21.7003 2.59137M2 22L2.87867 21.1343M8 12.1481V8.0724C8 7.26226 8.50333 6.53468 9.2687 6.23845L19.9515 2.10376C20.6148 1.84706 21.3145 2.08805 21.7003 2.59137M8 12.1481L14.5882 9.59816M8 12.1481V16.0888M22 16.0888C22 17.7212 20.6569 19.0444 19 19.0444C17.3431 19.0444 16 17.7212 16 16.0888C16 14.4565 17.3431 13.1333 19 13.1333C20.6569 13.1333 22 14.4565 22 16.0888ZM22 16.0888V7.86658M14.5882 9.59816L21.7003 2.59137M14.5882 9.59816L8 16.0888M7.12131 16.9545C6.57842 16.4197 5.82842 16.0888 5 16.0888C3.34315 16.0888 2 17.4121 2 19.0444C2 19.8606 2.33578 20.5995 2.87867 21.1343M7.12131 16.9545L8 16.0888M7.12131 16.9545L2.87867 21.1343" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMusicBeamNoteOffStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiMusicBeamNoteOffStroke',
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
      default: 'music-beam-note-off icon'
    }
  }
}
</script>
