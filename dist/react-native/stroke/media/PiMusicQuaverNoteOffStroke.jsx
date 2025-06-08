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
 * Pimusicquavernoteoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernoteoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note off icon",
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
      d="M12 18.9983C12 20.6561 10.6569 22 9 22C8.60128 22 8.22073 21.9222 7.87269 21.7809M12 18.9983C12 18.5999 11.9225 18.2197 11.7816 17.8719M12 18.9983V17.6536M12 12V3.64314C12 2.42323 13.2831 1.62981 14.3735 2.17536C16.0448 3.01147 17.2532 4.50405 17.7498 6.2502M12 12L17.7498 6.2502M12 12L7.71486 16.2851M22 2L17.7498 6.2502M7.71486 16.2851C7.09106 16.5815 6.58569 17.0869 6.28917 17.7108M7.71486 16.2851L6.28917 17.7108M6.28917 17.7108L2 22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimusicquavernoteoffstroke;
