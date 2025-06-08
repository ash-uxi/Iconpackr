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
 * Pinotificationbellonduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellonduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell on icon",
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
      d="M12.0007 2C7.73227 2 4.17637 5.2719 3.82189 9.52563L3.4669 13.7856C3.43575 14.1593 3.31701 14.5205 3.14665 15.0315C2.62569 16.5944 3.67874 18.2394 5.31568 18.4213C6.57802 18.5615 7.84373 18.6619 9.11089 18.7225C11.0363 18.8145 12.9651 18.8144 14.8906 18.7223C16.1575 18.6618 17.423 18.5613 18.6851 18.421C20.3207 18.2392 21.3731 16.5965 20.8545 15.0345C20.6846 14.5228 20.5659 14.1618 20.5348 13.788L20.1796 9.52563C19.8251 5.2719 16.2692 2 12.0007 2Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M8.19263 18.6716C8.4986 18.6908 8.80468 18.7078 9.11084 18.7224C11.0363 18.8144 12.9651 18.8144 14.8905 18.7223C15.1967 18.7077 15.5028 18.6907 15.8088 18.6714C15.5578 20.5505 13.9485 22 12.0007 22C10.0529 22 8.4437 20.5506 8.19263 18.6716ZM12.0007 20C11.1966 20 10.5128 19.4847 10.2615 18.7664C11.4207 18.7997 12.5807 18.7997 13.7399 18.7664C13.4886 19.4847 12.8048 20 12.0007 20Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pinotificationbellonduosolid;
