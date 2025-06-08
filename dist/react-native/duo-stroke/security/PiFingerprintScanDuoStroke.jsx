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
 * Pifingerprintscanduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifingerprintscanduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fingerprint scan icon",
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
      d="M12 16.5V15m0-4v.5m4-.5v3.5m-8 0V13m6-5.465A3.998 3.998 0 0 0 8.535 9"
      fill="none"
    />
    <path
      d="m5.45 20.519-.454.89h0zM3.48 18.55l.891-.454zm17.038 0 .89.454v0zM18.55 20.52l.454.89zm0-17.038-.454.891zM20.52 5.45l.89-.454v0zM5.449 3.48l.455.891h0zM3.482 5.45l.891.454v0zM22 15.623a1 1 0 1 0-2-.038zM15.585 20a1 1 0 0 0 .038 2zM20 8.415a1 1 0 0 0 2-.038zM15.623 2a1 1 0 1 0-.038 2zM8.415 4a1 1 0 0 0-.038-2zM4 15.585a1 1 0 0 0-2 .038zM2 8.377a1 1 0 0 0 2 .038zM8.377 22a1 1 0 1 0 .038-2zM5.45 20.519l.454-.891a3.5 3.5 0 0 1-1.532-1.532l-.89.454-.892.454a5.5 5.5 0 0 0 2.406 2.406zm15.069-1.969-.891-.454a3.5 3.5 0 0 1-1.532 1.532l.454.89.454.892a5.5 5.5 0 0 0 2.406-2.406zM18.55 3.481l-.454.891c.66.336 1.196.872 1.532 1.532l.89-.454.892-.454a5.5 5.5 0 0 0-2.406-2.406zm-13.1 0-.454-.89A5.5 5.5 0 0 0 2.59 4.995l.891.454.891.454a3.5 3.5 0 0 1 1.532-1.532zM21 15.604l-1-.02c-.026 1.392-.13 2.037-.372 2.512l.89.454.892.454c.472-.927.563-1.998.59-3.38zM15.604 21l.02 1c1.382-.027 2.453-.118 3.38-.59l-.454-.891-.454-.891c-.475.242-1.12.346-2.511.372zM21 8.396l1-.02c-.027-1.382-.118-2.453-.59-3.38l-.891.454-.891.454c.242.475.346 1.12.372 2.511zM15.604 3l-.02 1c1.392.026 2.037.13 2.512.372l.454-.89.454-.892c-.927-.472-1.998-.563-3.38-.59zM8.396 3l-.02-1c-1.382.027-2.453.118-3.38.59l.454.891.454.891c.475-.242 1.12-.346 2.511-.372zM3 15.604l-1 .02c.027 1.382.118 2.453.59 3.38l.891-.454.891-.454c-.242-.475-.346-1.12-.372-2.511zm0-7.208 1 .02c.026-1.392.13-2.037.372-2.512l-.89-.454-.892-.454c-.472.927-.563 1.998-.59 3.38zM8.396 21l.02-1c-1.392-.026-2.037-.13-2.512-.372l-.454.89-.454.892c.927.472 1.998.563 3.38.59z"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifingerprintscanduostroke;
