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
 * Pieye02onduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieye02onduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eye02 on icon",
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
      d="M5.84798 10.3834C4.52442 11.7197 4 13.2293 4 14C4 14.5523 3.55228 15 3 15C2.44771 15 2 14.5523 2 14C2 12.5832 2.82558 10.5928 4.42702 8.97597C6.06941 7.31778 8.57209 6 12 6C15.4279 6 17.9306 7.31778 19.573 8.97597C21.1744 10.5928 22 12.5832 22 14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14C20 13.2293 19.4756 11.7197 18.152 10.3834C16.8694 9.08847 14.8721 8 12 8C9.12791 8 7.13059 9.08847 5.84798 10.3834Z"
      fill={color || "#000"}
      opacity={0.28}
      fillRule="evenodd"
      clipRule="evenodd"
    />{" "}
    <path
      d="M8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pieye02onduosolid;
