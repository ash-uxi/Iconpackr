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
 * Piuseruser02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user02 icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21" />
    </g>
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21" />
  </Svg>
);

export default Piuseruser02contrast;
