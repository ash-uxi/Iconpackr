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
 * Pimaptreasureduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaptreasureduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map treasure icon",
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
      d="M4.76892 6.11556C4.12679 6.43662 3.80573 6.59715 3.57116 6.83665C3.36373 7.04844 3.20597 7.30369 3.10931 7.58394C3 7.90085 3 8.25981 3 8.97773V14.8754C3 16.5422 3 17.3757 3.34218 17.8827C3.66292 18.358 4.17221 18.6727 4.74074 18.7471C5.34729 18.8264 6.09273 18.4537 7.58359 17.7082C8.09391 17.4531 8.34908 17.3255 8.61626 17.2732C8.86969 17.2237 9.13031 17.2237 9.38374 17.2732C9.65092 17.3255 9.90609 17.4531 10.4164 17.7082L13.5689 19.2845C14.0936 19.5468 14.356 19.678 14.6312 19.7297C14.8749 19.7754 15.1251 19.7754 15.3688 19.7297C15.644 19.678 15.9064 19.5468 16.4311 19.2845L19.2311 17.8845C19.8732 17.5634 20.1943 17.4029 20.4288 17.1634C20.6363 16.9516 20.794 16.6963 20.8907 16.4161C21 16.0992 21 15.7402 21 15.0223V9.12463C21 7.45779 21 6.62437 20.6578 6.11731C20.3371 5.64204 19.8278 5.32728 19.2593 5.25296C18.6527 5.17366 17.9073 5.54638 16.4164 6.29181C15.9061 6.54697 15.6509 6.67455 15.3837 6.72679C15.1303 6.77633 14.8697 6.77633 14.6163 6.72679C14.3491 6.67455 14.0939 6.54697 13.5836 6.29181L10.4311 4.71556C9.90635 4.45319 9.64399 4.32201 9.3688 4.27038C9.12506 4.22465 8.87494 4.22465 8.6312 4.27038C8.35601 4.32201 8.09365 4.45319 7.56892 4.71556L4.76892 6.11556Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7.01 12H7M11.02 12H11.01M14.5 10.5L16.0001 12.0001M16.0001 12.0001L17.5 13.5M16.0001 12.0001L17.5003 10.5M16.0001 12.0001L14.5003 13.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimaptreasureduostroke;
