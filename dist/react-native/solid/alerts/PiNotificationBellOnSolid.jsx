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
 * Pinotificationbellonsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellonsolid = ({
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
      d="M3.82189 9.52563C4.17637 5.2719 7.73227 2 12.0007 2C16.2692 2 19.8251 5.2719 20.1796 9.52563L20.5348 13.788C20.5659 14.1618 20.6846 14.5228 20.8545 15.0345C21.3731 16.5965 20.3207 18.2392 18.6851 18.421C17.728 18.5274 16.769 18.6109 15.8088 18.6714C15.5578 20.5506 13.9486 22 12.0007 22C10.053 22 8.44376 20.5507 8.19269 18.6716C7.23231 18.6111 6.27303 18.5276 5.31568 18.4213C3.67874 18.2394 2.62569 16.5944 3.14665 15.0315C3.31701 14.5205 3.43575 14.1593 3.4669 13.7856L3.82189 9.52563ZM10.2615 18.7665C10.5129 19.4848 11.1966 20 12.0007 20C12.8049 20 13.4887 19.4848 13.74 18.7664C13.642 18.7692 13.544 18.7718 13.446 18.7742C12.3846 18.7995 11.3228 18.797 10.2615 18.7665Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pinotificationbellonsolid;
