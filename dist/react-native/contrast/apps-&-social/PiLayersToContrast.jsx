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
 * Pilayerstocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayerstocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layers to icon",
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
    <path d="M14.903 4.775 7.867 6.169c-1.31.26-2.26 1.423-2.269 2.78l-.048 7.286m9.353-11.46.206-.041c1.74-.345 3.355 1.016 3.343 2.819l-.002.212m-3.547-2.99.001-.215c.012-1.802-1.603-3.164-3.343-2.819L4.319 3.177c-1.31.26-2.26 1.423-2.269 2.78l-.05 7.5c-.012 1.802 1.603 3.163 3.343 2.819l.207-.041m0 0-.002.214c-.012 1.802 1.603 3.163 3.343 2.82l.206-.042m0 0-.001.213c-.011 1.802 1.603 3.164 3.343 2.819l7.242-1.436c1.31-.26 2.26-1.422 2.269-2.78l.05-7.5c.012-1.802-1.603-3.164-3.343-2.819l-.207.041M9.097 19.227l.05-7.287c.008-1.357.957-2.52 2.268-2.78l7.035-1.395" />
    <path
      fill={color}
      d="m2.05 5.957-.05 7.5c-.012 1.802 1.603 3.163 3.343 2.819l.207-.041-.002.214c-.012 1.802 1.603 3.163 3.343 2.82l.206-.042-.001.213c-.011 1.802 1.603 3.164 3.343 2.819l7.242-1.436c1.31-.26 2.26-1.422 2.269-2.78l.05-7.5c.012-1.802-1.603-3.164-3.343-2.819l-.207.041.002-.212c.012-1.803-1.603-3.164-3.343-2.82l-.206.042.001-.215c.012-1.802-1.603-3.164-3.343-2.819L4.319 3.177c-1.31.26-2.26 1.423-2.269 2.78"
      opacity={0.28}
    />
  </Svg>
);

export default Pilayerstocontrast;
