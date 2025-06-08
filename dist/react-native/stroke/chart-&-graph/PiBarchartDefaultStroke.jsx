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
 * Pibarchartdefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibarchartdefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "barchart default icon",
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
      d="M9 21V15C9 14.0681 9 13.6022 8.84776 13.2346C8.64477 12.7446 8.25542 12.3552 7.76537 12.1522C7.39782 12 6.93188 12 6 12C5.06812 12 4.60218 12 4.23463 12.1522C3.74458 12.3552 3.35523 12.7446 3.15224 13.2346C3 13.6022 3 14.0681 3 15V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H9ZM9 21H15M9 21V6C9 5.06812 9 4.60218 9.15224 4.23463C9.35523 3.74458 9.74458 3.35523 10.2346 3.15224C10.6022 3 11.0681 3 12 3C12.9319 3 13.3978 3 13.7654 3.15224C14.2554 3.35523 14.6448 3.74458 14.8478 4.23463C15 4.60218 15 5.06812 15 6V21M15 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11C21 10.0681 21 9.60218 20.8478 9.23463C20.6448 8.74458 20.2554 8.35523 19.7654 8.15224C19.3978 8 18.9319 8 18 8C17.0681 8 16.6022 8 16.2346 8.15224C15.7446 8.35523 15.3552 8.74458 15.1522 9.23463C15 9.60218 15 10.0681 15 11V21Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibarchartdefaultstroke;
