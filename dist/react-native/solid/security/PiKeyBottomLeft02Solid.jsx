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
 * Pikeybottomleft02solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeybottomleft02solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key bottom left02 icon",
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
      d="M10.5077 9.2503C10.2624 8.09034 10.3985 6.88216 10.8957 5.80583C11.3929 4.72951 12.2246 3.84266 13.2668 3.27747C14.309 2.71228 15.506 2.499 16.6793 2.66943C17.8526 2.83986 18.9394 3.38487 19.7778 4.22322C20.6161 5.06158 21.1611 6.1484 21.3316 7.3217C21.502 8.49501 21.2887 9.69197 20.7235 10.7342C20.1583 11.7764 19.2715 12.6081 18.1952 13.1053C17.1188 13.6025 15.9106 13.7386 14.7507 13.4933L12.7067 15.5353C12.5192 15.7228 12.2649 15.8282 11.9997 15.8283H10.8787V16.9503C10.8786 17.2155 10.7732 17.4698 10.5857 17.6573L8.46369 19.7783C8.27619 19.9658 8.02188 20.0712 7.75669 20.0713H4.92969C4.66447 20.0713 4.41012 19.9659 4.22258 19.7784C4.03504 19.5909 3.92969 19.3365 3.92969 19.0713V16.2433C3.92974 15.9781 4.03514 15.7238 4.22269 15.5363L10.5077 9.2503ZM15.7347 5.6073C15.5323 5.63604 15.342 5.72058 15.185 5.85144C15.0281 5.98231 14.9106 6.15431 14.8459 6.34818C14.7813 6.54204 14.7719 6.75009 14.8188 6.949C14.8657 7.14791 14.9672 7.3298 15.1117 7.4743L16.5257 8.8883C16.6702 9.03283 16.8521 9.13425 17.051 9.18119C17.2499 9.22813 17.4579 9.21872 17.6518 9.15403C17.8457 9.08934 18.0177 8.97193 18.1485 8.81495C18.2794 8.65797 18.3639 8.46764 18.3927 8.2653C18.4441 7.90426 18.4108 7.53621 18.2955 7.19026C18.1801 6.84431 17.9858 6.52997 17.7279 6.2721C17.47 6.01423 17.1557 5.81991 16.8097 5.70453C16.4638 5.58914 16.0957 5.55585 15.7347 5.6073Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pikeybottomleft02solid;
