<script>
  /**
   * PiPiechartRoseDuoStroke icon from the duo-stroke style in chart-&-graph category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'piechart-rose icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M19.8578 13.0008C19.8578 17.8957 15.8898 21.8638 10.9949 21.8638V20.7559M19.8578 13.0008H21.1319C21.1319 7.40227 16.5934 2.86377 10.9949 2.86377V6.35357M19.8578 13.0008H10.9949M10.9949 20.7559C6.71187 20.7559 3.23975 17.2838 3.23975 13.0008H4.34767M10.9949 20.7559V13.0008M4.34767 13.0008C4.34767 9.32963 7.32373 6.35357 10.9949 6.35357M4.34767 13.0008H10.9949M10.9949 6.35357V13.0008" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M21.1319 13.0008C21.1319 7.40227 16.5934 2.86377 10.9949 2.86377V13.0008H21.1319Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
