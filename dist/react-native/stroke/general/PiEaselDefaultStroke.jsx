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
 * Pieaseldefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieaseldefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "easel default icon",
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
      d="M12 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V11.6C2 13.8402 2 14.9603 2.43597 15.816C2.81947 16.5686 3.43139 17.1805 4.18404 17.564C4.98718 17.9732 6.02332 17.9984 8.00005 17.9999M12 3H15.6C17.8402 3 18.9603 3 19.816 3.43597C20.5686 3.81947 21.1805 4.43139 21.564 5.18404C22 6.03968 22 7.15979 22 9.4V11.6C22 13.8402 22 14.9603 21.564 15.816C21.1805 16.5686 20.5686 17.1805 19.816 17.564C19.017 17.9711 17.9874 17.9981 16.0306 17.9999M12 3V2M6 22L8.00005 17.9999M18 22L16.0306 17.9999M12 21V18.0016M16.0306 17.9999C14.6871 18.0011 13.3435 18.0016 12 18.0016M8.00005 17.9999C9.33336 18.0009 10.6667 18.0015 12 18.0016"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pieaseldefaultstroke;
