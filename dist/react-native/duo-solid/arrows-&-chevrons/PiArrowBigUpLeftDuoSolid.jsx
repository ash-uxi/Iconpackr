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
 * Piarrowbigupleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigupleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big up left icon",
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
      d="M14.956 3.91935C15.1488 3.94817 15.3291 4.03275 15.4745 4.16267C15.6199 4.29259 15.7241 4.4622 15.7744 4.65061C15.8247 4.83902 15.8187 5.03801 15.7574 5.2231C15.696 5.40819 15.5818 5.5713 15.429 5.69235C11.8191 8.55176 8.55175 11.8188 5.69197 15.4284C5.57098 15.5812 5.40796 15.6954 5.22294 15.7568C5.03793 15.8182 4.83899 15.8242 4.65061 15.7741C4.46223 15.7239 4.29261 15.6198 4.16262 15.4745C4.03264 15.3292 3.94795 15.1491 3.91897 14.9564C3.45497 11.8524 3.39297 8.70835 3.73697 5.60135C3.78919 5.12492 4.00236 4.68055 4.34127 4.34165C4.68017 4.00274 5.12454 3.78957 5.60097 3.73735C8.71408 3.39385 11.8586 3.45503 14.956 3.91935Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />{" "}
    <path
      d="M19.4709 13.8151L19.4939 13.8381C19.6627 14.0021 19.8251 14.1725 19.9809 14.3491C20.1594 14.5491 20.2964 14.7826 20.3839 15.0361C20.5144 15.4377 20.5144 15.8704 20.3839 16.2721C20.2889 16.5621 20.1299 16.7831 19.9809 16.9581C19.8459 17.1181 19.6719 17.2911 19.4939 17.4701L19.4709 17.4921L17.4909 19.4721L17.4689 19.4951C17.2909 19.6731 17.1169 19.8471 16.9579 19.9821C16.7829 20.1301 16.5609 20.2901 16.2709 20.3841C15.8689 20.5141 15.4369 20.5141 15.0349 20.3841C14.7449 20.2901 14.5229 20.1301 14.3489 19.9821C14.1889 19.8471 14.0159 19.6731 13.8369 19.4951L13.8149 19.4721L6.79486 12.4521C6.6135 12.2706 6.50883 12.0263 6.5025 11.7699C6.49617 11.5134 6.58867 11.2643 6.76086 11.0741C8.12633 9.56662 9.56541 8.12754 11.0729 6.76206C11.2631 6.58958 11.5124 6.4969 11.7692 6.50323C12.0259 6.50956 12.2703 6.61442 12.4519 6.79606L19.4719 13.8161L19.4709 13.8151Z"
      fill={color || "#000"}
      opacity={0.28}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Piarrowbigupleftduosolid;
