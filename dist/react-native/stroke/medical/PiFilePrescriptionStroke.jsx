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
 * Pifileprescriptionstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifileprescriptionstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file prescription icon",
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
      d="M14 2.05752V3.2C14 4.88016 14 5.72024 14.327 6.36197C14.6146 6.92646 15.0735 7.3854 15.638 7.67302C16.2798 8 17.1198 8 18.8 8L19.9425 8M14 2.05752C13.6065 2 13.136 2 12.349 2H10.4C8.15979 2 7.03968 2 6.18404 2.43597C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4 5.03968 4 6.15979 4 8.4V15.6C4 17.8402 4 18.9603 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C7.03968 22 8.15979 22 10.4 22H13.6C15.8402 22 16.9603 22 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C20 18.9603 20 17.8402 20 15.6V9.65097C20 8.864 20 8.39354 19.9425 8M14 2.05752C14.0957 2.07151 14.1869 2.0889 14.2769 2.11052C14.6851 2.20851 15.0753 2.37012 15.4331 2.58944C15.8368 2.83681 16.1827 3.18271 16.8745 3.87451L18.1255 5.12548C18.8173 5.81729 19.1632 6.16319 19.4106 6.56686C19.6299 6.92475 19.7915 7.31493 19.8895 7.72307C19.9111 7.81313 19.9285 7.90429 19.9425 8M8 13V10H11C11.8284 10 12.5 10.6716 12.5 11.5C12.5 12.3284 11.8284 13 11 13H10M8 13V16M8 13H10M12 19L14 17M14 17L16 15M14 17L16 19M14 17L10 13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifileprescriptionstroke;
