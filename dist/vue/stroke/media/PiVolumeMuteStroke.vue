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
    <path d="M22 10.0002L17 15.0002M22 15.0002L17 10.0002M14 5.08767V18.9127C14 20.6236 12.0661 21.6188 10.6739 20.6244L7.86092 18.6151C7.29344 18.2098 6.6464 17.9295 5.96255 17.7927C3.6585 17.3319 2 15.3088 2 12.9592V11.0412C2 8.69152 3.6585 6.66848 5.96255 6.20767C6.6464 6.0709 7.29344 5.79058 7.86092 5.38524L10.6739 3.37599C12.0661 2.38153 14 3.37675 14 5.08767Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiVolumeMuteStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiVolumeMuteStroke',
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
      default: 'volume-mute icon'
    }
  }
}
</script>
