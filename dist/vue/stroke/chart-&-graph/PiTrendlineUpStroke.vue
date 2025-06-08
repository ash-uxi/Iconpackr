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
    <path d="M2 16.852L2.72917 15.9145C4.52868 13.6009 6.77699 11.6745 9.33921 10.2511C9.65601 10.0751 10.0549 10.1718 10.2559 10.4733L13.4676 15.2908C13.6741 15.6006 14.1004 15.6698 14.3943 15.4412C16.9557 13.449 18.9953 10.865 20.338 7.91095L20.6593 7.20411M22 11.8258C21.8189 10.3227 21.4411 8.85036 20.8767 7.44659C20.8337 7.33966 20.7554 7.25547 20.6593 7.20411M16.0136 8.36958C17.4059 7.77484 18.8699 7.36586 20.3678 7.15274C20.4709 7.13806 20.5724 7.15767 20.6593 7.20411" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTrendlineUpStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiTrendlineUpStroke',
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
      default: 'trendline-up icon'
    }
  }
}
</script>
