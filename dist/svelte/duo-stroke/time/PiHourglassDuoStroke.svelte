<script>
  /**
   * PiHourglassDuoStroke icon from the duo-stroke style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'hourglass icon';
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
  <path d="M13.5 12C13.5 15.5193 19.5856 15.8885 19.9856 19.5156C20.0654 20.2397 19.8104 20.9599 19.3033 21.4428C18.7181 22 17.3758 22 14.6914 22L9.3086 22C6.62416 22 5.28192 22 4.69671 21.4428C4.18955 20.9599 3.93458 20.2397 4.01442 19.5156C4.41441 15.8885 10.5 15.5193 10.5 12" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M13.5 12C13.5 8.48068 19.5856 8.11147 19.9856 4.48436C20.0654 3.76031 19.8104 3.04013 19.3033 2.55723C18.7181 2 17.3758 2 14.6914 2H9.3086C6.62415 2 5.28192 2 4.69671 2.55723C4.18955 3.04013 3.93458 3.76031 4.01442 4.48436C4.41441 8.11147 10.5 8.48068 10.5 12" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
