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
 * Picampfireduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picampfireduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "camp fire icon",
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
      d="M12.6161 14.1914C12.3399 15.4856 11.5933 16.9992 10.9999 16.9992C10.9999 16.9992 10.3238 16.3127 9.85521 15.6465C9.36888 16.3207 9 17.1468 9 18.0315C9 19.5149 9.99999 20.9983 12 20.9983C13.9999 20.9983 14.9999 19.5149 14.9999 18.0315C14.9999 16.2816 13.5567 14.761 12.6161 14.1914Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 21L12 5.16667M12 5.16667L14 2M12 5.16667L22 21M12 5.16667L10 2"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Picampfireduostroke;
