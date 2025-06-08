<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M1.8501 11.9999C1.8501 17.6059 6.3941 22.1499 12.0001 22.1499C17.6061 22.1499 22.1501 17.6059 22.1501 11.9999C22.1501 6.3949 17.6061 1.8499 12.0001 1.8499C6.3941 1.8499 1.8501 6.3949 1.8501 11.9999ZM15.4041 7.1959C15.5967 7.05147 15.8349 6.98135 16.075 6.99842C16.3151 7.01548 16.541 7.11858 16.7112 7.2888C16.8814 7.45901 16.9845 7.68491 17.0016 7.92501C17.0186 8.16512 16.9485 8.40333 16.8041 8.5959L13.3351 13.2189C13.1785 13.4288 12.9786 13.6026 12.7489 13.7284C12.5193 13.8543 12.2652 13.9292 12.004 13.9481C11.7428 13.967 11.4806 13.9295 11.2351 13.8381C10.9897 13.7467 10.7668 13.6035 10.5817 13.4183C10.3965 13.2332 10.2533 13.0103 10.1619 12.7649C10.0705 12.5194 10.033 12.2572 10.0519 11.996C10.0708 11.7348 10.1457 11.4807 10.2716 11.2511C10.3974 11.0214 10.5712 10.8215 10.7811 10.6649L15.4041 7.1959Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiGaugeRightUpSolid icon from the solid style in chart-&-graph category.
 */
export default {
  name: 'PiGaugeRightUpSolid',
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
      default: 'gauge-right-up icon'
    }
  }
}
</script>
