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
 * Pimediagifstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimediagifstroke = ({
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
      d="M9.5 8.75H8C6.89543 8.75 6 9.64543 6 10.75V13.25C6 14.3546 6.89543 15.25 8 15.25H9.5V12H8.78703M12.8472 8.75V15.25M18.0422 8.75H17.0422C16.49 8.75 16.0422 9.19772 16.0422 9.75V12.0062M16.0422 12.0062V15.25M16.0422 12.0062H18.0422M9.4 20H14.6C16.8402 20 17.9603 20 18.816 19.564C19.5686 19.1805 20.1805 18.5686 20.564 17.816C21 16.9603 21 15.8402 21 13.6V10.4C21 8.15979 21 7.03968 20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597C17.9603 4 16.8402 4 14.6 4H9.4C7.15979 4 6.03968 4 5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404C3 7.03968 3 8.15979 3 10.4V13.6C3 15.8402 3 16.9603 3.43597 17.816C3.81947 18.5686 4.43139 19.1805 5.18404 19.564C6.03968 20 7.15979 20 9.4 20Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimediagifstroke;
