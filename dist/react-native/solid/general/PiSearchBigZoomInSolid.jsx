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
 * Pisearchbigzoominsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchbigzoominsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search big zoom in icon",
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
      d="M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 13.7627 20.2079 15.8419 18.8875 17.4733L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L17.4733 18.8875C15.8419 20.2079 13.7627 21 11.5 21C6.25329 21 2 16.7467 2 11.5ZM12.5 8.5C12.5 7.94772 12.0523 7.5 11.5 7.5C10.9477 7.5 10.5 7.94772 10.5 8.5V10.5H8.5C7.94772 10.5 7.5 10.9477 7.5 11.5C7.5 12.0523 7.94772 12.5 8.5 12.5H10.5V14.5C10.5 15.0523 10.9477 15.5 11.5 15.5C12.0523 15.5 12.5 15.0523 12.5 14.5V12.5H14.5C15.0523 12.5 15.5 12.0523 15.5 11.5C15.5 10.9477 15.0523 10.5 14.5 10.5H12.5V8.5Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pisearchbigzoominsolid;
