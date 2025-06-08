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
 * Pimediagifduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimediagifduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "media gif icon",
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
      d="M3 10.4C3 8.15979 3 7.03968 3.43597 6.18404C3.81947 5.43139 4.43139 4.81947 5.18404 4.43597C6.03968 4 7.15979 4 9.4 4H14.6C16.8402 4 17.9603 4 18.816 4.43597C19.5686 4.81947 20.1805 5.43139 20.564 6.18404C21 7.03968 21 8.15979 21 10.4V13.6C21 15.8402 21 16.9603 20.564 17.816C20.1805 18.5686 19.5686 19.1805 18.816 19.564C17.9603 20 16.8402 20 14.6 20H9.4C7.15979 20 6.03968 20 5.18404 19.564C4.43139 19.1805 3.81947 18.5686 3.43597 17.816C3 16.9603 3 15.8402 3 13.6V10.4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.5 8.75H8C6.89543 8.75 6 9.64543 6 10.75V13.25C6 14.3546 6.89543 15.25 8 15.25H9.5V12H8.78703M12.8472 8.75V15.25M18.0422 8.75H17.0422C16.49 8.75 16.0422 9.19772 16.0422 9.75V12.0062M16.0422 12.0062V15.25M16.0422 12.0062H18.0422"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimediagifduostroke;
