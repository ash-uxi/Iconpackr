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
 * Pidoublechevronupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron up icon",
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
      <path d="M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0" />
    </g>
    <path d="M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0" />
  </Svg>
);

export default Pidoublechevronupcontrast;
