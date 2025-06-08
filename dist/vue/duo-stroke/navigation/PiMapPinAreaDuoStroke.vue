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
    <path d="M12.0005 18C13.6847 18 18.7374 14.4444 18.7374 9.11111C18.7374 3.77778 14.5268 2 12.0005 2C9.4742 2 5.26367 3.77778 5.26367 9.11111C5.26367 14.4444 10.3163 18 12.0005 18Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3.51789 17C2.55602 17.5022 2 18.0958 2 18.7319C2 20.5368 6.47715 22 12 22C17.5228 22 22 20.5368 22 18.7319C22 18.0958 21.444 17.5022 20.4821 17M14.5263 8.73689C14.5263 10.1321 13.3953 11.2632 12 11.2632C10.6048 11.2632 9.47371 10.1321 9.47371 8.73689C9.47371 7.34164 10.6048 6.21057 12 6.21057C13.3953 6.21057 14.5263 7.34164 14.5263 8.73689Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMapPinAreaDuoStroke icon from the duo-stroke style in navigation category.
 */
export default {
  name: 'PiMapPinAreaDuoStroke',
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
      default: 'map-pin-area icon'
    }
  }
}
</script>
