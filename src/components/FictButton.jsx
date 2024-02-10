import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import styles from "./FictButton.module.scss"

export default function FictButton({variant, btnText, handleClick, type=""}) {
    const ContainedBtn = styled(Button)({
        background: "#1b3e6e",
        color: "#fff",
        border: "2px solid #1b3e6e",
        "&:hover" : {
            background: "#fff",
            color: "#1b3e6e",
        }
    })
    const OutlinedBtn = styled(Button)({
        background: "#fff",
        color: "#f99c25",
        border: "2px solid #f99c25",
        "&:hover" : {
            background: "#f99c25",
            color: "#fff",
        }
    })
  return (
    <div className={styles.btnContainer}>
      {variant === "contained" && <ContainedBtn onClick={handleClick} type={type}>{btnText}</ContainedBtn>}
      {variant === "outlined" && <OutlinedBtn onClick={handleClick} type={type}>{btnText}</OutlinedBtn>}

    </div>
  );
}