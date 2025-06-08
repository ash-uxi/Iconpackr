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
    <path d="M13 3.00098C13 2.4487 12.5523 2.00098 12 2.00098C11.4477 2.00098 11 2.4487 11 3.00098V8.41733L8.10766 10.1942L3.15554 8.6469C2.62839 8.4822 2.06753 8.77603 1.90283 9.30318C1.73812 9.83033 2.03195 10.3912 2.5591 10.5559L7.54981 12.1152L9.0181 14.9198L5.51323 19.8391C5.19276 20.2889 5.29761 20.9134 5.7474 21.2338C6.1972 21.5543 6.82163 21.4495 7.1421 20.9997L10.5487 16.2183L14.5931 17.8208L16.8579 20.9997C17.1784 21.4495 17.8028 21.5543 18.2526 21.2338C18.7024 20.9134 18.8072 20.2889 18.4868 19.8391L16.2656 16.7216L16.6918 12.0397L21.4408 10.556C21.968 10.3913 22.2618 9.83036 22.0971 9.3032C21.9324 8.77605 21.3716 8.48222 20.8444 8.64692L15.8923 10.1942L13 8.41734V3.00098Z" :fill="color || 'currentColor'" fill-rule="evenodd" clip-rule="evenodd" /> <path d="M14.4098 2.80744C12.9728 1.7634 11.0269 1.7634 9.58994 2.80744L3.39935 7.30517C1.96235 8.34921 1.36105 10.1999 1.90993 11.8892L4.27453 19.1666C4.82341 20.8559 6.39763 21.9997 8.17386 21.9997H15.8259C17.6021 21.9997 19.1763 20.8559 19.7252 19.1666L22.0898 11.8892C22.6387 10.1999 22.0374 8.34921 20.6004 7.30517L14.4098 2.80744Z" :fill="color || 'currentColor'" opacity="0.28" fill-rule="evenodd" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiGraphChartRadarDuoSolid icon from the duo-solid style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartRadarDuoSolid',
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
      default: 'graph-chart-radar icon'
    }
  }
}
</script>
