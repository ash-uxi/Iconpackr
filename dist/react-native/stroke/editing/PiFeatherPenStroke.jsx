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
 * Pifeatherpenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifeatherpenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "feather pen icon",
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
      d="M2.5 21.5C2.5 20.2738 2.68075 18.5349 3.18042 16.6089M3.18042 16.6089C4.7164 10.6885 9.26594 3 20.8424 3C20.963 6.0602 19.8207 10.291 15.8483 12.1101M3.18042 16.6089C14.3986 18.3287 15.9635 14.7187 15.8483 12.1101M15.8483 12.1101C14.6284 12.6688 13.1415 13 11.3424 13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifeatherpenstroke;
