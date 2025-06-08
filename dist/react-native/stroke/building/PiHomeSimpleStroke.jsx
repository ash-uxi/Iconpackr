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
 * Pihomesimplestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihomesimplestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "home simple icon",
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
      d="M3 12.7587C3 11.7418 3 11.2334 3.11866 10.7571C3.22385 10.3349 3.39721 9.93275 3.63191 9.56641C3.89667 9.15313 4.26632 8.80402 5.00561 8.1058L7.60561 5.65025C9.15211 4.18966 9.92537 3.45937 10.8075 3.18385C11.584 2.94132 12.416 2.94132 13.1925 3.18385C14.0746 3.45937 14.8479 4.18966 16.3944 5.65025L18.9944 8.1058C19.7337 8.80402 20.1033 9.15313 20.3681 9.56641C20.6028 9.93275 20.7761 10.3349 20.8813 10.7571C21 11.2334 21 11.7418 21 12.7587V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H9.4C7.15979 21 6.03968 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6V12.7587Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pihomesimplestroke;
