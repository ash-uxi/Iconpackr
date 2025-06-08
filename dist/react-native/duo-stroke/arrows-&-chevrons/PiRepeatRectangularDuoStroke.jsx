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
 * Pirepeatrectangularduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirepeatrectangularduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "repeat rectangular icon",
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
      d="M18 2C19.0964 2.79655 20.0785 3.73031 20.9207 4.77659C21.0264 4.90803 21.0264 5.09197 20.9207 5.22341C20.0785 6.26969 19.0964 7.20345 18 8M6 16C4.90359 16.7965 3.92154 17.7303 3.07935 18.7766C2.97355 18.908 2.97355 19.092 3.07935 19.2234C3.92154 20.2697 4.90359 21.2035 6 22"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21 5H11C8.19974 5 6.79961 5 5.73005 5.54497C4.78924 6.02433 4.02433 6.78924 3.54497 7.73005C3.06911 8.66397 3.00876 9.84993 3.00111 12M3 19H13C15.8003 19 17.2004 19 18.27 18.455C19.2108 17.9757 19.9757 17.2108 20.455 16.27C20.9309 15.336 20.9912 14.1501 20.9989 12"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pirepeatrectangularduostroke;
