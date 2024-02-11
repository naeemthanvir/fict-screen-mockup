import { useState } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';

import styles from "./FictSelect.module.scss"


function FictSelect({options, selectID, selectLabel, register, name}) {
  const [val, setVal] = useState('');
  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const selectItems = options.map((item) => {
    return <MenuItem sx={{
      "&.MuiMenuItem-root": {
        fontSize: "12px"
      }
    }} key={item.value} value={item.value}>{item.label}</MenuItem>
  })

  return (
    <FormControl key={selectID} sx={{ m: 1, width: "100%", margin: "0 0 5px 0"}} size="small">
        <InputLabel className={styles.label}><span>{selectLabel}</span></InputLabel>
        <Select
        id={selectID}
        value={val}
        label={selectLabel}
        {...register(name)}
        onChange={handleChange}
        sx={{
          "& .MuiSelect-select": {
            fontSize: "12px"
          }
        }}
        >
        {selectItems}
        </Select>
    </FormControl>
  )
}

export default FictSelect