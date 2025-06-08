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
 * Pidoublechevrondowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevrondowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron down icon",
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
      <path d="M11.702 16.894A20.4 20.4 0 0 1 8 13l2.205.165c1.195.09 2.395.09 3.59 0L16 13a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M11.702 10.894A20.4 20.4 0 0 1 8 7l2.205.165c1.195.09 2.395.09 3.59 0L16 7a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0" />
    </g>
    <path d="M11.702 10.894A20.4 20.4 0 0 1 8 7l2.205.165c1.195.09 2.395.09 3.59 0L16 7a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M11.702 16.894A20.4 20.4 0 0 1 8 13l2.205.165c1.195.09 2.395.09 3.59 0L16 13a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0" />
  </Svg>
);

export default Pidoublechevrondowncontrast;
