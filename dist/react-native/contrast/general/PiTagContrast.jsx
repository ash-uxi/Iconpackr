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
 * Pitagcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitagcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tag icon",
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
      d="m18.194 8.294-2.421-2.421c-1.114-1.113-1.67-1.67-2.323-2.056a6 6 0 0 0-1.869-.717c-.743-.15-1.53-.108-3.101-.026l-.821.044c-1.525.08-2.287.12-2.878.437A3 3 0 0 0 3.555 4.78c-.317.59-.357 1.353-.437 2.878l-.044.82c-.082 1.573-.124 2.359.026 3.102a6 6 0 0 0 .717 1.869c.386.653.943 1.21 2.056 2.323l2.421 2.421c1.317 1.316 1.975 1.974 2.68 2.334a5 5 0 0 0 4.54 0c.706-.36 1.364-1.018 2.68-2.334s1.974-1.974 2.334-2.68a5 5 0 0 0 0-4.54c-.36-.705-1.018-1.363-2.334-2.68"
      opacity={0.28}
    />
    <path d="M8.51 8.512h.02m7.243-2.639 2.421 2.421c1.316 1.317 1.974 1.975 2.334 2.68a5 5 0 0 1 0 4.54c-.36.706-1.018 1.364-2.334 2.68s-1.974 1.974-2.68 2.334a5 5 0 0 1-4.54 0c-.705-.36-1.363-1.018-2.68-2.334l-2.421-2.421c-1.113-1.114-1.67-1.67-2.056-2.323a6 6 0 0 1-.717-1.869c-.15-.743-.108-1.53-.026-3.101l.044-.821c.08-1.525.12-2.287.437-2.878A3 3 0 0 1 4.78 3.555c.59-.317 1.353-.357 2.878-.437l.82-.044c1.573-.082 2.359-.124 3.102.026a6 6 0 0 1 1.869.717c.653.386 1.21.943 2.323 2.056M9.49 8.488a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </Svg>
);

export default Pitagcontrast;
