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
 * Pinavigationslantstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationslantstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation slant icon",
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
      d="M9.30803 12.486L3.46755 11.1382C2.955 11.0199 2.84026 10.3416 3.2854 10.0613L3.77015 9.75611C8.84856 6.55859 14.4497 4.27905 20.3177 3.02162C20.7123 2.93706 21.0628 3.2876 20.9783 3.68221C19.7209 9.5502 17.4413 15.1513 14.2438 20.2298L13.9386 20.7145C13.6583 21.1596 12.98 21.0449 12.8617 20.5324L11.5139 14.6919C11.2608 13.5953 10.4046 12.7391 9.30803 12.486Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinavigationslantstroke;
