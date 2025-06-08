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
 * Pitoggleonsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitoggleonsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "toggle on icon",
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
      d="M1 12C1 9.87827 1.84285 7.84344 3.34315 6.34315C4.84344 4.84285 6.87827 4 9 4H15C17.1217 4 19.1566 4.84285 20.6569 6.34315C22.1571 7.84344 23 9.87827 23 12C23 14.1217 22.1571 16.1566 20.6569 17.6569C19.1566 19.1571 17.1217 20 15 20H9C6.87827 20 4.84344 19.1571 3.34315 17.6569C1.84285 16.1566 1 14.1217 1 12ZM10 12C10 10.6739 10.5268 9.40215 11.4645 8.46447C12.4021 7.52678 13.6739 7 15 7C16.3261 7 17.5979 7.52678 18.5355 8.46447C19.4732 9.40215 20 10.6739 20 12C20 13.3261 19.4732 14.5979 18.5355 15.5355C17.5979 16.4732 16.3261 17 15 17C13.6739 17 12.4021 16.4732 11.4645 15.5355C10.5268 14.5979 10 13.3261 10 12Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pitoggleonsolid;
