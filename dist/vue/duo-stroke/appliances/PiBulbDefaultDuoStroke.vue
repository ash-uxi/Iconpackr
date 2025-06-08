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
    <path d="M12 12V16M12 12H13M12 12H11M10 22H14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M12 3C8.13401 3 5 6.01619 5 9.73684C5 11.7763 5.94169 13.6042 7.42944 14.8396C8.05785 15.3614 8.59811 16.0093 8.80348 16.7998L9.08332 17.8771C9.25508 18.5384 9.85196 19 10.5351 19H13.4649C14.148 19 14.7449 18.5384 14.9167 17.8771L15.1965 16.7998C15.4019 16.0093 15.9422 15.3614 16.5706 14.8396C18.0583 13.6042 19 11.7763 19 9.73684C19 6.01619 15.866 3 12 3Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBulbDefaultDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiBulbDefaultDuoStroke',
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
      default: 'bulb-default icon'
    }
  }
}
</script>
