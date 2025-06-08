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
    <path d="M19.9731 14C20.4381 14 20.6975 14 20.8882 13.9489C21.4059 13.8102 21.8102 13.4059 21.9489 12.8882C22 12.6975 22 12.465 22 12C22 11.535 22 11.3025 21.9489 11.1118C21.8102 10.5941 21.4059 10.1898 20.8882 10.0511C20.6975 10 20.4381 10 19.9731 10M17.6457 6.35426C17.6077 6.33709 17.5694 6.3205 17.5307 6.30448C16.7956 6 15.8638 6 14 6H8C6.13623 6 5.20435 6 4.46927 6.30448C3.48915 6.71046 2.71046 7.48915 2.30448 8.46927C2 9.20435 2 10.1362 2 12C2 13.8638 2 14.7956 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C4.88239 17.8666 5.35767 17.9416 6.02559 17.9744M19.9531 9.69259C20 10.2694 20 11.0007 20 12C20 13.8638 20 14.7956 19.6955 15.5307C19.2895 16.5108 18.5108 17.2895 17.5307 17.6955C16.7956 18 15.8638 18 14 18H11.6457" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M21 3L3 21" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBatteryOffDuoStroke icon from the duo-stroke style in devices category.
 */
export default {
  name: 'PiBatteryOffDuoStroke',
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
      default: 'battery-off icon'
    }
  }
}
</script>
