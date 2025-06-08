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
 * Pifolderarrowleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifolderarrowleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "folder arrow left icon",
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
      d="M15 14H9M9 14C9 14.1047 9.035 14.2094 9.1049 14.2957C9.6221 14.934 10.2164 15.5065 10.8744 16M9 14C9 13.8953 9.035 13.7906 9.1049 13.7043C9.6221 13.066 10.2164 12.4935 10.8744 12M2 9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H8.71556C9.18517 3 9.41997 3 9.6331 3.06473C9.82179 3.12203 9.99732 3.21597 10.1497 3.34118C10.3217 3.48262 10.452 3.67798 10.7125 4.06872L11.2875 4.93128C11.548 5.32202 11.6783 5.51738 11.8503 5.65882C12.0027 5.78403 12.1782 5.87797 12.3669 5.93527C12.58 6 12.8148 6 13.2844 6H15.6C17.8402 6 18.9603 6 19.816 6.43597C20.5686 6.81947 21.1805 7.43139 21.564 8.18404C22 9.03968 22 10.1598 22 12.4V14.6C22 16.8402 22 17.9603 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C18.9603 21 17.8402 21 15.6 21H8.4C6.15979 21 5.03968 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifolderarrowleftstroke;
