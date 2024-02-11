import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import styles from "./ToggleAndText.module.scss"

function ToggleAndText({title, toggleText, secondText, register, name}) {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 36,
        height: 22,
        padding: 0,
        display: 'flex',
        right: 5,
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: "#1b3e6e",
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 18,
          height: 18,
          borderRadius: 26,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 20,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));
  return (
    <div>
        <p className={styles.toggleTitle}><strong>{title}</strong></p>
        <div className={styles.toggleContent}>
            <AntSwitch  
              {...register(name)}
            />  
            <span>{toggleText}</span>
            <span className={styles.divider}>|</span>
            <span><AccessTimeIcon style={{
                position: "relative",
                top: "6px",
                marginRight: "5px"
            }}/>{secondText}</span>
        </div>
    </div>
  )
}

export default ToggleAndText