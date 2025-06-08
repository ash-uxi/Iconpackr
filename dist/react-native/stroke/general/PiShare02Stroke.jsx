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
 * Pishare02stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishare02stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "share02 icon",
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
      d="M21 13V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V13M8 6.856C8.98262 5.50734 10.1276 4.28481 11.409 3.216C11.5745 3.07685 11.7838 3.00038 12 3M12 3C12.2162 3.00038 12.4255 3.07685 12.591 3.216C13.8724 4.28482 15.0174 5.50735 16 6.856M12 3V16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pishare02stroke;
