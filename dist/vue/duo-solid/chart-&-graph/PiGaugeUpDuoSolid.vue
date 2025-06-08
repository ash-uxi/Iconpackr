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
    <path d="M12.0001 1.8501C6.3941 1.8501 1.8501 6.3941 1.8501 12.0001C1.8501 17.6051 6.3941 22.1501 12.0001 22.1501C17.6061 22.1501 22.1501 17.6051 22.1501 12.0001C22.1501 6.3941 17.6061 1.8501 12.0001 1.8501Z" :fill="color || 'currentColor'" opacity="0.28" fill-rule="evenodd" clip-rule="evenodd" /> <path d="M12.6556 7.94971C12.8375 8.01616 12.9563 8.108 12.9903 8.20838L13.8063 10.6175C13.844 10.7267 13.8255 10.8379 13.752 10.9438C13.6785 11.0496 13.5518 11.1476 13.3805 11.231C13.2092 11.3144 12.9973 11.3813 12.7591 11.4271C12.5209 11.4729 12.2622 11.4967 12.0003 11.4967C11.7384 11.4967 11.4796 11.4729 11.2415 11.4271C11.0033 11.3813 10.7914 11.3144 10.6201 11.231C10.4488 11.1476 10.3221 11.0496 10.2486 10.9438C10.1751 10.8379 10.1566 10.7267 10.1943 10.6175L11.0103 8.20838C11.0443 8.108 11.1631 8.01616 11.345 7.94971C11.5268 7.88326 11.7595 7.84668 12.0003 7.84668C12.2411 7.84668 12.4738 7.88326 12.6556 7.94971Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiGaugeUpDuoSolid icon from the duo-solid style in chart-&-graph category.
 */
export default {
  name: 'PiGaugeUpDuoSolid',
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
      default: 'gauge-up icon'
    }
  }
}
</script>
