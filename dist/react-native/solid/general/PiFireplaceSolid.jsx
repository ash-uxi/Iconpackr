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
 * Pifireplacesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifireplacesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fireplace icon",
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
      d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V5.5C22 6.70948 21.1411 7.71836 20 7.94999V20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H19H5H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H4V7.94999C2.85888 7.71836 2 6.70948 2 5.5V4.5ZM18 20V8H6V20H18ZM12.2193 10.0821C12.5164 9.95367 12.8573 9.97697 13.1341 10.1446C13.725 10.5025 14.4203 11.12 14.9746 11.8964C15.5294 12.6736 15.9999 13.6914 15.9999 14.8401C15.9999 15.7979 15.6781 16.7868 14.9936 17.5483C14.2934 18.3273 13.2675 18.8069 12 18.8069C10.7325 18.8069 9.7065 18.3273 9.00627 17.5483C8.32183 16.7868 8 15.7979 8 14.8401C8 13.6787 8.4808 12.6511 9.04419 11.8701C9.2334 11.6078 9.53777 11.4532 9.86117 11.4551C10.1846 11.457 10.4871 11.6153 10.6731 11.8798C10.8121 12.0773 10.9675 12.273 11.1149 12.4481L11.1158 12.4463C11.3283 12.0161 11.5064 11.4083 11.6381 10.7913C11.7057 10.4748 11.9222 10.2105 12.2193 10.0821Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifireplacesolid;
