<script>
  /**
   * PiPlayCircleContrast icon from the contrast style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'play-circle icon';
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
  <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"/>
  <path d="M9.5 11.896c0-1.432 0-2.148.3-2.548a1.5 1.5 0 0 1 1.093-.597c.498-.035 1.1.352 2.305 1.126l.162.104c1.045.672 1.567 1.008 1.748 1.435a1.5 1.5 0 0 1 0 1.168c-.18.427-.703.763-1.748 1.435l-.162.104c-1.205.774-1.807 1.161-2.305 1.126A1.5 1.5 0 0 1 9.8 14.65c-.299-.4-.299-1.115-.299-2.547z"/>
</svg>
