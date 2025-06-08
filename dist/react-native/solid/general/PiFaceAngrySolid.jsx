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
 * Pifaceangrysolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifaceangrysolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face angry icon",
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
      d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM10.0882 9.08134C10.5406 9.39812 10.6505 10.0217 10.3337 10.4741C10.017 10.9265 9.39341 11.0364 8.941 10.7196L7.71228 9.85928C7.25987 9.5425 7.14992 8.91895 7.4667 8.46655C7.78348 8.01414 8.40702 7.9042 8.85943 8.22097L10.0882 9.08134ZM15.0594 10.7196C14.607 11.0364 13.9834 10.9265 13.6667 10.4741C13.3499 10.0217 13.4598 9.39812 13.9122 9.08134L15.141 8.22097C15.5934 7.9042 16.2169 8.01414 16.5337 8.46655C16.8505 8.91895 16.7405 9.5425 16.2881 9.85928L15.0594 10.7196ZM16.2664 16.8148C15.872 17.2014 15.2389 17.1951 14.8523 16.8007C14.1251 16.059 13.1148 15.6007 11.9957 15.6007C10.8765 15.6007 9.86617 16.059 9.13904 16.8007C8.75241 17.1951 8.11928 17.2014 7.72489 16.8148C7.33051 16.4282 7.32421 15.795 7.71084 15.4006C8.79863 14.291 10.3174 13.6007 11.9957 13.6007C13.6739 13.6007 15.1927 14.291 16.2805 15.4006C16.6671 15.795 16.6608 16.4282 16.2664 16.8148Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifaceangrysolid;
