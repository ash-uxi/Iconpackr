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
 * Picakesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picakesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cake icon",
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
      d="M12 1C12.5523 1 13 1.44772 13 2V2.01C13 2.56228 12.5523 3.01 12 3.01C11.4477 3.01 11 2.56228 11 2.01V2C11 1.44772 11.4477 1 12 1Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M17 1C17.5523 1 18 1.44772 18 2V2.01C18 2.56228 17.5523 3.01 17 3.01C16.4477 3.01 16 2.56228 16 2.01V2C16 1.44772 16.4477 1 17 1Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M7 1C7.55228 1 8 1.44772 8 2V2.01C8 2.56228 7.55228 3.01 7 3.01C6.44772 3.01 6 2.56228 6 2.01V2C6 1.44772 6.44772 1 7 1Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M7 4C7.55228 4 8 4.44772 8 5V7H11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V7H16V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V7.02628C18.6853 7.06454 19.2825 7.16418 19.816 7.43597C20.5686 7.81947 21.1805 8.43139 21.564 9.18404C21.8113 9.66937 21.9099 10.1861 21.9558 10.7482C21.9613 10.8158 21.9662 10.8854 21.9704 10.9569C22 11.4576 22 12.0543 22 12.7587V19C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19V12.7587C1.99999 11.9537 1.99998 11.2894 2.04419 10.7482C2.04706 10.713 2.05014 10.6781 2.05344 10.6433C2.10302 10.1216 2.20414 9.63904 2.43597 9.18404C2.45994 9.137 2.4848 9.09051 2.51053 9.04459C2.89651 8.35579 3.47843 7.7955 4.18404 7.43597C4.18821 7.43385 4.19238 7.43174 4.19655 7.42964C4.72681 7.16262 5.3201 7.06425 6 7.02628V5C6 4.44772 6.44772 4 7 4ZM4 15.7836V19H20V15.7836C19.553 15.572 19.1639 15.2052 18.93 14.6833C18.8496 14.5039 18.5948 14.5039 18.5144 14.6833C17.7276 16.4389 15.2353 16.4389 14.4486 14.6833C14.3681 14.5039 14.1133 14.5039 14.0329 14.6833C13.2462 16.4389 10.7538 16.4389 9.96707 14.6833C9.88664 14.5039 9.63186 14.5039 9.55143 14.6833C8.76467 16.4389 6.27234 16.4389 5.48558 14.6833C5.40515 14.5039 5.15037 14.5039 5.06994 14.6833C4.83607 15.2052 4.44703 15.572 4 15.7836Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picakesolid;
