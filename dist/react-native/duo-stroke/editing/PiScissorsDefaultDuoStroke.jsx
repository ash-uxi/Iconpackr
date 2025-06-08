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
 * Piscissorsdefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscissorsdefaultduostroke = ({
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
      d="M14.4 17.4002C14.4 16.4454 14.7793 15.5297 15.4545 14.8545C16.1296 14.1793 17.0453 13.8 18.0001 13.8C18.9549 13.8 19.8707 14.1793 20.5458 14.8545C21.221 15.5297 21.6003 16.4454 21.6003 17.4002C21.6003 18.355 21.221 19.2707 20.5458 19.9458C19.8707 20.621 18.9549 21.0003 18.0001 21.0003C17.0453 21.0003 16.1296 20.621 15.4545 19.9458C14.7793 19.2707 14.4 18.355 14.4 17.4002Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.3993 3.00024L11.9997 11.3998M11.9997 11.3998L3.6001 3.00024M11.9997 11.3998L15.4543 14.8544M11.9997 11.3998L8.54505 14.8544"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5.99954 13.8C6.95435 13.8 7.87006 14.1793 8.54521 14.8545C9.22036 15.5297 9.59966 16.4454 9.59966 17.4002C9.59966 18.355 9.22036 19.2707 8.54521 19.9458C7.87006 20.621 6.95435 21.0003 5.99954 21.0003C5.04473 21.0003 4.12902 20.621 3.45387 19.9458C2.77871 19.2707 2.39941 18.355 2.39941 17.4002C2.39941 16.4454 2.77871 15.5297 3.45387 14.8545C4.12902 14.1793 5.04472 13.8 5.99954 13.8Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piscissorsdefaultduostroke;
