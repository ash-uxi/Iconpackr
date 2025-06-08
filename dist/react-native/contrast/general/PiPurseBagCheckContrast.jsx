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
 * Pipursebagcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipursebagcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "purse bag check icon",
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
      d="M3.659 13.259c-.568 2.65-.852 3.974-.503 5.012a4 4 0 0 0 1.754 2.171C5.853 21 7.207 21 9.917 21h4.166c2.71 0 4.065 0 5.007-.558a4 4 0 0 0 1.755-2.17c.348-1.04.064-2.364-.504-5.013l-.392-1.832c-.339-1.579-.508-2.368-.928-2.958a3.5 3.5 0 0 0-1.462-1.182c-.412-.178-.879-.246-1.559-.271C15.583 7 15.086 7 14.473 7H9.527C8.914 7 8.417 7 8 7.016c-.68.025-1.147.093-1.559.271A3.5 3.5 0 0 0 4.98 8.47c-.42.59-.59 1.38-.927 2.958z"
      opacity={0.28}
    />
    <path d="M8 7.016C8.417 7 8.914 7 9.527 7h4.946c.613 0 1.11 0 1.527.016m-8 0c-.68.025-1.147.093-1.559.271A3.5 3.5 0 0 0 4.98 8.47c-.42.59-.59 1.38-.927 2.958l-.393 1.832c-.568 2.65-.852 3.974-.503 5.012a4 4 0 0 0 1.754 2.171C5.853 21 7.207 21 9.917 21h4.166c2.71 0 4.065 0 5.007-.558a4 4 0 0 0 1.755-2.17c.348-1.04.064-2.364-.504-5.013l-.392-1.832c-.339-1.579-.508-2.368-.928-2.958a3.5 3.5 0 0 0-1.462-1.182c-.412-.178-.879-.246-1.559-.271m-8 0C8 4.83 9.808 3 12 3s4 1.83 4 4.016" />
    <path d="m9 14.259 2.036 2.034A13 13 0 0 1 15 12" />
  </Svg>
);

export default Pipursebagcheckcontrast;
