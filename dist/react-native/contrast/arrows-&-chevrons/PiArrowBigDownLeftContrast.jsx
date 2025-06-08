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
 * Piarrowbigdownleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigdownleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big down left icon",
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
      fill={color}
      d="m16.783 5.236 1.98 1.98c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.23-.272.427-.668.823l-7.017 7.017a61 61 0 0 0 3.062 2.595c-3.011.451-6.069.511-9.096.177a1.11 1.11 0 0 1-.98-.98 35.2 35.2 0 0 1 .177-9.097 61 61 0 0 0 2.595 3.063l7.016-7.018c.396-.396.594-.594.823-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668"
      opacity={0.28}
    />
    <path d="m18.764 7.217-1.98-1.98c-.396-.396-.594-.594-.822-.669a1 1 0 0 0-.618 0c-.229.075-.427.273-.823.669l-7.017 7.017A61 61 0 0 1 4.91 9.19a35.3 35.3 0 0 0-.178 9.097 1.11 1.11 0 0 0 .98.98 35.3 35.3 0 0 0 9.097-.177 61 61 0 0 1-3.062-2.595l7.017-7.017c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822" />
  </Svg>
);

export default Piarrowbigdownleftcontrast;
