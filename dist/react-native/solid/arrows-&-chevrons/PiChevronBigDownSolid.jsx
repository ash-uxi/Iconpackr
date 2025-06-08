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
 * Pichevronbigdownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigdownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big down icon",
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
      d="M18.8103 9.58599C19.0392 9.26945 19.0629 8.84859 18.8708 8.50841C18.6788 8.16824 18.3062 7.97103 17.917 8.00347C13.9791 8.33162 10.0209 8.33162 6.08305 8.00347C5.69376 7.97103 5.32122 8.16824 5.12918 8.50841C4.93714 8.84859 4.96077 9.26945 5.18968 9.58599C6.81746 11.837 8.72356 13.8566 10.859 15.593C11.5263 16.1357 12.4737 16.1357 13.141 15.593C15.2764 13.8566 17.1825 11.837 18.8103 9.58599Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pichevronbigdownsolid;
