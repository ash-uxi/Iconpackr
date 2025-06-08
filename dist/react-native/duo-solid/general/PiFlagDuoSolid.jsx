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
 * Piflagduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piflagduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "flag icon",
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
      fill={color || "#000"}
      d="M12.526 3.052a7.03 7.03 0 0 0-5.777-.738l-1.446.448A1.85 1.85 0 0 0 4 4.529v8.927c0 .216.04.471.18.716.145.259.361.437.596.541.409.183.823.121 1.03.08.344-.069.657-.21.983-.328h.002a5.6 5.6 0 0 1 4.562.442 7.6 7.6 0 0 0 6.01.66l1.309-.405A1.89 1.89 0 0 0 20 13.36V4.485c0-.267-.064-.577-.27-.854a1.35 1.35 0 0 0-.723-.492c-.423-.12-.857-.04-1.117.02-.298.07-.591.176-.811.26-.14.053-.278.114-.42.161a5.03 5.03 0 0 1-4.133-.528"
      opacity={0.28}
    />{" "}
    <path d="M5 3v18" />
  </Svg>
);

export default Piflagduosolid;
