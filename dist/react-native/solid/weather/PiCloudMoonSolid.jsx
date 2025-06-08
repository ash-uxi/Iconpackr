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
 * Picloudmoonsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudmoonsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud moon icon",
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
      d="M16.4999 1C13.5936 1 11.1328 2.90743 10.301 5.53872C10.5638 5.51311 10.8303 5.5 11.0999 5.5C14.3151 5.5 17.0897 7.36437 18.4105 10.0661C19.3591 10.6585 20.1621 11.4644 20.7513 12.417C22.1286 11.2251 22.9999 9.46431 22.9999 7.5L22.9998 7.45873C22.9976 7.10244 22.8059 6.77423 22.4968 6.59716C22.1876 6.42009 21.8075 6.42091 21.4991 6.59931C21.0589 6.85395 20.548 7 19.9999 7C18.343 7 16.9999 5.65685 16.9999 4C16.9999 3.45194 17.146 2.94103 17.4006 2.50081C17.579 2.19239 17.5798 1.81235 17.4027 1.50317C17.2257 1.19398 16.8975 1.00235 16.5412 1.00013L16.4999 1ZM10.4473 7.28296C10.6619 7.26116 10.8797 7.25 11.1 7.25C13.8042 7.25 16.1139 8.93105 17.0445 11.3033C18.8457 12.2103 20.0833 14.0765 20.0833 16.2333C20.0833 19.2801 17.6134 21.75 14.5667 21.75H5.9C3.33188 21.75 1.25 19.6681 1.25 17.1C1.25 14.9095 2.76407 13.0735 4.80312 12.5803C5.27022 9.76636 7.57785 7.57437 10.4473 7.28296Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picloudmoonsolid;
