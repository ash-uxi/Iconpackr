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
 * Pispatialscreenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialscreenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial screen icon",
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
      d="M16 21H11M2 14V7M21 5.6V15.4C21 15.9601 21 16.2401 20.891 16.454C20.7951 16.6422 20.6422 16.7951 20.454 16.891C20.2401 17 19.9601 17 19.4 17H6.6C6.03995 17 5.75992 17 5.54601 16.891C5.35785 16.7951 5.20487 16.6422 5.10899 16.454C5 16.2401 5 15.9601 5 15.4V5.6C5 5.03995 5 4.75992 5.10899 4.54601C5.20487 4.35785 5.35785 4.20487 5.54601 4.10899C5.75992 4 6.03995 4 6.6 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pispatialscreenstroke;
