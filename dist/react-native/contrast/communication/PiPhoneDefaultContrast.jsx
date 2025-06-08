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
 * Piphonedefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphonedefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone default icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M5.407 12.974c-1.237-2.097-2.05-4.541-2.372-7.265-.141-1.196.6-2.455 1.862-2.662.397-.064.887-.055 1.29-.018 1.684.152 2.38 1.637 2.749 3.079a5.43 5.43 0 0 1-1.57 5.332c-.605.56-1.305 1.032-1.959 1.534M18.287 20.965c-2.858-.337-5.408-1.217-7.572-2.56.632-.728 1.229-1.532 1.943-2.181a5.43 5.43 0 0 1 4.866-1.276c1.521.349 3.226 1.018 3.435 2.788.052.435.06.933-.01 1.366-.207 1.262-1.466 2.004-2.662 1.863" />
    </g>
    <path d="M5.407 12.974c-1.237-2.097-2.05-4.541-2.372-7.265-.141-1.196.6-2.455 1.862-2.662.397-.064.887-.055 1.29-.018 1.684.152 2.38 1.637 2.749 3.079a5.43 5.43 0 0 1-1.57 5.332c-.605.56-1.305 1.032-1.959 1.534m0 0a15.8 15.8 0 0 0 5.308 5.43m0 0c2.164 1.344 4.714 2.224 7.572 2.561 1.196.141 2.455-.6 2.662-1.863.07-.433.062-.93.01-1.366-.21-1.77-1.913-2.44-3.435-2.788a5.43 5.43 0 0 0-4.866 1.276c-.714.65-1.311 1.453-1.943 2.18" />
  </Svg>
);

export default Piphonedefaultcontrast;
