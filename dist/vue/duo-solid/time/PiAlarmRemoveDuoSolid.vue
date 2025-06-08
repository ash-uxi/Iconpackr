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
    <path d="M12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M19.7071 2.29289C19.3166 1.90237 18.6834 1.90237 18.2929 2.29289C17.9024 2.68342 17.9024 3.31658 18.2929 3.70711L21.2929 6.70711C21.6834 7.09763 22.3166 7.09763 22.7071 6.70711C23.0976 6.31658 23.0976 5.68342 22.7071 5.29289L19.7071 2.29289Z" :fill="color || 'currentColor'" /> <path d="M5.70711 3.70711C6.09763 3.31658 6.09763 2.68342 5.70711 2.29289C5.31658 1.90237 4.68342 1.90237 4.29289 2.29289L1.29289 5.29289C0.902369 5.68342 0.902369 6.31658 1.29289 6.70711C1.68342 7.09763 2.31658 7.09763 2.70711 6.70711L5.70711 3.70711Z" :fill="color || 'currentColor'" /> <path d="M8.8999 12C8.34762 12 7.8999 12.4477 7.8999 13C7.8999 13.5523 8.34762 14 8.8999 14H15.0999C15.6522 14 16.0999 13.5523 16.0999 13C16.0999 12.4477 15.6522 12 15.0999 12H8.8999Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiAlarmRemoveDuoSolid icon from the duo-solid style in time category.
 */
export default {
  name: 'PiAlarmRemoveDuoSolid',
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
      default: 'alarm-remove icon'
    }
  }
}
</script>
