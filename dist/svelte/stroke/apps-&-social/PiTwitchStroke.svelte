<script>
  /**
   * PiTwitchStroke icon from the stroke style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'twitch icon';
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
  <path d="M11 11V7.75M16 11V7.75M8 18.2H7.8C6.11984 18.2 5.27976 18.2 4.63803 17.8894C4.07354 17.6161 3.6146 17.1801 3.32698 16.6439C3 16.0342 3 15.2361 3 13.64V7.56C3 5.96385 3 5.16578 3.32698 4.55613C3.6146 4.01987 4.07354 3.58387 4.63803 3.31063C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.31063C19.9265 3.58387 20.3854 4.01987 20.673 4.55613C21 5.16578 21 5.96385 21 7.56V11.8816C21 12.811 21 13.2757 20.8895 13.7131C20.7915 14.1008 20.6299 14.4715 20.4106 14.8115C20.1632 15.195 19.8173 15.5236 19.1255 16.1808L18.8745 16.4192C18.1827 17.0764 17.8368 17.405 17.4331 17.64C17.0753 17.8484 16.6851 18.0019 16.2769 18.095C15.8166 18.2 15.3274 18.2 14.349 18.2H12L8 22V18.2Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
