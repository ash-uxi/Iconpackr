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
 * Pivideocalldefaultsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocalldefaultsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call default icon",
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
      d="M13 4C15.1654 4 17.0093 5.37654 17.7044 7.3023L18.0704 6.99486C20.0222 5.35534 23 6.74294 23 9.29197V14.708C23 17.2571 20.0222 18.6446 18.0704 17.0051L17.7044 16.6977C17.0093 18.6234 15.1654 20 13 20H6C3.23857 20 1 17.7614 1 15V9C1 6.23858 3.23858 4 6 4H13ZM18.0011 13.9145L18.0013 10.0801C18.0156 9.80403 18.1439 9.54512 18.3568 9.36626L19.3568 8.52626C20.0074 7.97976 21 8.4423 21 9.29197V14.708C21 15.5577 20.0074 16.0202 19.3568 15.4737L18.3568 14.6337C18.1425 14.4537 18.014 14.1927 18.0011 13.9145Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pivideocalldefaultsolid;
