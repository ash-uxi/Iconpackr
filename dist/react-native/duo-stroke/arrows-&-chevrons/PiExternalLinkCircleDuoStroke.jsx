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
 * Piexternallinkcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexternallinkcircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "external link circle icon",
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
      d="M19.7597 9.45455C20.0221 7.8217 20.0697 6.16984 19.9019 4.54138C19.8898 4.42328 19.838 4.31854 19.7597 4.24027M19.7597 4.24027C19.6815 4.16201 19.5767 4.11023 19.4586 4.09806C17.8302 3.93025 16.1783 3.97792 14.5455 4.24027M19.7597 4.24027L10 14"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19.9741 13.5C19.6642 17.1412 16.6103 20 12.8889 20H12C7.58172 20 4 16.4183 4 12V11.1111C4 7.3896 6.85873 4.3358 10.5 4.02588"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piexternallinkcircleduostroke;
