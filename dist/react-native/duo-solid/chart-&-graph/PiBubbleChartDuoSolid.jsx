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
 * Pibubblechartduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibubblechartduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bubble chart icon",
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
    <g opacity={0.28}>
      <path
        d="M6.0001 10.1001C3.84619 10.1001 2.1001 11.8462 2.1001 14.0001C2.1001 16.154 3.84619 17.9001 6.0001 17.9001C8.15401 17.9001 9.9001 16.154 9.9001 14.0001C9.9001 11.8462 8.15401 10.1001 6.0001 10.1001Z"
        fill={color || "#000"}
      />
      <path
        d="M13.5001 15.1001C11.8985 15.1001 10.6001 16.3985 10.6001 18.0001C10.6001 19.6017 11.8985 20.9001 13.5001 20.9001C15.1017 20.9001 16.4001 19.6017 16.4001 18.0001C16.4001 16.3985 15.1017 15.1001 13.5001 15.1001Z"
        fill={color || "#000"}
      />
    </g>{" "}
    <path
      d="M15.5001 3.1001C12.5178 3.1001 10.1001 5.51776 10.1001 8.5001C10.1001 11.4824 12.5178 13.9001 15.5001 13.9001C18.4824 13.9001 20.9001 11.4824 20.9001 8.5001C20.9001 5.51776 18.4824 3.1001 15.5001 3.1001Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pibubblechartduosolid;
