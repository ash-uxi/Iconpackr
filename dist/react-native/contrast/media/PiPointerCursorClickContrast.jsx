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
 * Pipointercursorclickcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipointercursorclickcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pointer cursor click icon",
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
    <path d="M10.998 4.879V2.304m4.888 3.843 1.517-1.407M4.875 11.002H2.3m4.368-4.33L4.503 4.507m.233 12.9 1.407-1.518m7.993-5.95 3.536.884c1.576.394 2.364.59 2.683.809a2.165 2.165 0 0 1 .13 3.481c-.303.241-1.074.496-2.616 1.006-.277.092-.416.138-.54.198a2.16 2.16 0 0 0-1.016 1.015c-.06.125-.106.264-.197.54-.51 1.543-.765 2.314-1.007 2.617a2.165 2.165 0 0 1-3.481-.13c-.218-.32-.415-1.107-.809-2.683l-.884-3.536c-.462-1.848-.693-2.772-.44-3.415a2.17 2.17 0 0 1 1.226-1.227c.643-.252 1.567-.021 3.415.44" />
    <path
      fill={color}
      d="M9.935 14.14c-.462-1.848-.693-2.772-.44-3.415a2.17 2.17 0 0 1 1.226-1.227c.644-.252 1.567-.02 3.415.44l3.536.885c1.576.394 2.364.59 2.683.809a2.165 2.165 0 0 1 .13 3.481c-.302.241-1.074.497-2.616 1.006a5 5 0 0 0-.54.198 2.17 2.17 0 0 0-1.016 1.015c-.06.125-.106.264-.197.54-.51 1.543-.765 2.314-1.007 2.617a2.165 2.165 0 0 1-3.48-.13c-.219-.32-.416-1.107-.81-2.683z"
      opacity={0.28}
    />
  </Svg>
);

export default Pipointercursorclickcontrast;
