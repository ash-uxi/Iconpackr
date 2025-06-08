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
 * Pieyeonduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieyeonduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eye on icon",
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
      d="M12 4C8.9326 4 6.44606 5.39556 4.74497 7.02861C3.89369 7.84584 3.22177 8.738 2.75737 9.57918C2.30736 10.3943 2 11.2565 2 12C2 12.7435 2.30736 13.6057 2.75737 14.4208C3.22177 15.262 3.89369 16.1542 4.74497 16.9714C6.44606 18.6044 8.9326 20 12 20C15.0674 20 17.5539 18.6044 19.255 16.9714C20.1063 16.1542 20.7782 15.262 21.2426 14.4208C21.6926 13.6057 22 12.7435 22 12C22 11.2565 21.6926 10.3943 21.2426 9.57918C20.7782 8.738 20.1063 7.84584 19.255 7.02861C17.5539 5.39556 15.0674 4 12 4Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pieyeonduosolid;
