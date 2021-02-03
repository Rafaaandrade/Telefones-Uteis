import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const ButtonUI = ({
  text,
  width,
  children,
  height,
  color,
  isLoading = false,
  isDisabled = false,
  style,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Button
      loading={isLoading}
      disable={isDisabled}
      className={styles.button}
      text={text}
      color={color}
      width={width}
      height={height}
      style={style}
      {...rest}
    >
      <div className={styles.content}>{text || children}</div>
    </Button>
  );
};

export default ButtonUI;
