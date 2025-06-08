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
 * Pikeyslantduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyslantduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key slant icon",
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
      d="M15.7682 7.17144L18.5966 4.34302L20.7179 6.46434M15.7682 7.17144L10.1113 12.8283M15.7682 7.17144L17.1824 8.58566"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M4.4538 18.4854C6.0159 20.0475 8.54856 20.0475 10.1107 18.4854C11.6727 16.9233 11.6727 14.3907 10.1107 12.8286C8.54856 11.2665 6.0159 11.2665 4.4538 12.8286C2.8917 14.3907 2.8917 16.9233 4.4538 18.4854Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyslantduostroke;
