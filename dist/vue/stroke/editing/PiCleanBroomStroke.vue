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
    <path d="M10.7217 12.4648C8.61538 14.8654 6.14842 16.8955 3.42885 18.6099C1.49974 19.826 6.67752 20.5129 7.1393 20.5816M10.7217 12.4648L18.9986 14.6095M10.7217 12.4648C12.3102 10.6545 12.976 9.66741 15.6263 10.3368M18.9986 14.6095C18.9884 13.985 18.9236 13.3536 18.8013 12.7155C18.5018 11.1536 16.9006 10.6587 15.6263 10.3368M18.9986 14.6095C19.0273 16.3789 18.617 18.0923 17.8313 19.7407C17.1743 21.1189 14.135 21.0034 12.4946 20.9937M7.1393 20.5816C8.91234 20.8454 10.702 20.9831 12.4946 20.9937M7.1393 20.5816C8.27901 19.9945 10.2841 18.3126 11.7375 16.2739M12.4946 20.9937C13.1297 20.3066 14.471 18.6976 15.2145 17.2932M15.6263 10.3368L18.6497 3" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCleanBroomStroke icon from the stroke style in editing category.
 */
export default {
  name: 'PiCleanBroomStroke',
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
      default: 'clean-broom icon'
    }
  }
}
</script>
