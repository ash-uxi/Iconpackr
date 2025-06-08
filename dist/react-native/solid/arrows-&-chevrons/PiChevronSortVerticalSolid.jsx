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
 * Pichevronsortverticalsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronsortverticalsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron sort vertical icon",
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
      d="M12.925 4.32681C12.3836 3.89106 11.6165 3.89106 11.0751 4.32681C9.61225 5.50434 8.3074 6.87649 7.1946 8.40731C7.0578 8.59303 6.98424 8.82673 7.00285 9.07479C7.04415 9.62553 7.5241 10.0385 8.07484 9.9972C10.688 9.80121 13.3121 9.80121 15.9253 9.9972C16.476 10.0385 16.9559 9.62553 16.9972 9.07479C17.0159 8.82672 16.9423 8.59302 16.8055 8.40729C15.6927 6.87648 14.3878 5.50433 12.925 4.32681Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M8.07484 14.0028C7.5241 13.9615 7.04415 14.3745 7.00285 14.9252C6.98424 15.1733 7.05781 15.407 7.19462 15.5927C8.30742 17.1235 9.61226 18.4957 11.0751 19.6732C11.6165 20.1089 12.3836 20.1089 12.925 19.6732C14.3878 18.4957 15.6927 17.1235 16.8055 15.5927C16.9423 15.407 17.0159 15.1733 16.9972 14.9252C16.9559 14.3745 16.476 13.9615 15.9253 14.0028C13.3121 14.1988 10.688 14.1988 8.07484 14.0028Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pichevronsortverticalsolid;
