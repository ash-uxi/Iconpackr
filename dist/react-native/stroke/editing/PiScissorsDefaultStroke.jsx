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
 * Piscissorsdefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscissorsdefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "scissors default icon",
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
      d="M20.3994 2.99976L11.9998 11.3993M11.9998 11.3993L3.60026 2.99976M11.9998 11.3993L15.4545 14.854M11.9998 11.3993L8.54521 14.854M15.4545 14.854C14.7793 15.5291 14.4 16.4448 14.4 17.3996C14.4 18.3544 14.7793 19.2701 15.4545 19.9453C16.1296 20.6205 17.0453 20.9998 18.0001 20.9998C18.9549 20.9998 19.8707 20.6205 20.5458 19.9453C21.221 19.2701 21.6003 18.3544 21.6003 17.3996C21.6003 16.4448 21.221 15.5291 20.5458 14.854C19.8707 14.1788 18.9549 13.7995 18.0001 13.7995C17.0453 13.7995 16.1296 14.1788 15.4545 14.854ZM8.54521 14.854C7.87006 14.1788 6.95435 13.7995 5.99954 13.7995C5.04473 13.7995 4.12902 14.1788 3.45387 14.854C2.77871 15.5291 2.39941 16.4448 2.39941 17.3996C2.39941 18.3544 2.77871 19.2702 3.45387 19.9453C4.12902 20.6205 5.04473 20.9998 5.99954 20.9998C6.95435 20.9998 7.87006 20.6205 8.54521 19.9453C9.22036 19.2702 9.59966 18.3544 9.59966 17.3996C9.59966 16.4448 9.22036 15.5291 8.54521 14.854Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piscissorsdefaultstroke;
