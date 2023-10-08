import { forwardRef, useState } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Image.module.scss";

function Image(
  { src, alt, fallback: customFallBack = images.noImage, className, ...props },
  ref
) {
  const [fallBack, setFallBack] = useState("");

  const handleSwitch = () => setFallBack(customFallBack);

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      {...props}
      onError={handleSwitch}
    />
  );
}

export default forwardRef(Image);
