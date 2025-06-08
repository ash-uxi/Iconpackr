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
    <path d="M10.3789 21H13.621" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M12 4.99438C8.85888 4.99438 6.3125 7.44504 6.3125 10.4681C6.3125 12.1252 7.07762 13.6103 8.28642 14.614C8.797 15.038 9.23596 15.5644 9.40282 16.2068L9.6302 17.0821C9.76975 17.6193 10.2547 17.9944 10.8098 17.9944H13.1902C13.7453 17.9944 14.2302 17.6193 14.3698 17.0821L14.5972 16.2068C14.764 15.5644 15.203 15.038 15.7136 14.614C16.9224 13.6103 17.6875 12.1252 17.6875 10.4681C17.6875 7.44504 15.1411 4.99438 12 4.99438Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBulbOffDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiBulbOffDuoStroke',
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
      default: 'bulb-off icon'
    }
  }
}
</script>
