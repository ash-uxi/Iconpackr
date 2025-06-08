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
 * Pilogoutleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilogoutleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log out left icon",
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
    <path d="M11 4.528A6 6 0 0 1 21 9v6a6 6 0 0 1-10 4.472" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M6.807 9.1a1 1 0 0 0-1.595-.9 16 16 0 0 0-2.832 2.727 1.7 1.7 0 0 0 0 2.146A16 16 0 0 0 5.212 15.8a1 1 0 0 0 1.595-.9 54 54 0 0 0-.099-.884c-.04-.35-.08-.686-.11-1.016H16a1 1 0 1 0 0-2H6.599c.029-.33.068-.666.11-1.016q.05-.423.098-.884"
    />
  </Svg>
);

export default Pilogoutleftduosolid;
