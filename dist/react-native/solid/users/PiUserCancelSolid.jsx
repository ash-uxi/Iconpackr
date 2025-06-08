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
 * Piusercancelsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusercancelsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user cancel icon",
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
      d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M13.1708 14H7C4.23858 14 2 16.2386 2 19C2 20.6569 3.34315 22 5 22H17C18.0622 22 18.9954 21.448 19.5285 20.6152C19.2958 20.4841 19.0768 20.3195 18.8787 20.1213L18.5 19.7426L18.1213 20.1213C16.9497 21.2929 15.0503 21.2929 13.8787 20.1213C12.7071 18.9497 12.7071 17.0503 13.8787 15.8787L14.2574 15.5L13.8787 15.1213C13.5512 14.7938 13.3152 14.4095 13.1708 14Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M18.5 14.0858L16.7071 12.2929C16.3166 11.9024 15.6834 11.9024 15.2929 12.2929C14.9024 12.6834 14.9024 13.3166 15.2929 13.7071L17.0858 15.5L15.2929 17.2929C14.9024 17.6834 14.9024 18.3166 15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L18.5 16.9142L20.2929 18.7071C20.6834 19.0976 21.3166 19.0976 21.7071 18.7071C22.0976 18.3166 22.0976 17.6834 21.7071 17.2929L19.9142 15.5L21.7071 13.7071C22.0976 13.3166 22.0976 12.6834 21.7071 12.2929C21.3166 11.9024 20.6834 11.9024 20.2929 12.2929L18.5 14.0858Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piusercancelsolid;
