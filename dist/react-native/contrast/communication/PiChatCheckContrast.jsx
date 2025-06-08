import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pichatcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichatcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chat check icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      fill={color}
      d="M12 21a9 9 0 1 0-8.91-7.728c.17 1.203.255 1.805.267 1.964.02.257.016.165.014.423 0 .159-.014.34-.04.702l-.153 2.153c-.062.858-.092 1.286.06 1.607.133.281.36.508.641.641.32.152.75.122 1.607.06l2.153-.153c.362-.026.543-.04.702-.04.258-.002.166-.006.423.014.159.012.76.098 1.963.268h.001Q11.352 21 12 21"
      opacity={0.28}
    />
    <path d="m8.5 12.766 2.341 2.339a15 15 0 0 1 4.558-4.936l.101-.069M21 12a9 9 0 0 1-10.272 8.91c-1.203-.17-1.805-.255-1.964-.267-.257-.02-.165-.016-.423-.014a12 12 0 0 0-.693.039l-2.162.154c-.857.062-1.286.092-1.607-.06a1.35 1.35 0 0 1-.641-.641c-.152-.32-.122-.75-.06-1.607l.153-2.153c.026-.362.04-.543.04-.702.002-.258.006-.166-.014-.423-.012-.159-.098-.76-.268-1.964A9 9 0 1 1 21 12" />
  </Svg>
);

export default Pichatcheckcontrast;
