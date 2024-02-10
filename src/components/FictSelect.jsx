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
  return (
    <FormControl sx={{ m: 1, width: "100%", margin: 0}} size="small">
        <InputLabel className={styles.label}><strong>{selectLabel}</strong></InputLabel>
        <Select
        id={selectID}
        value={val}
        label={selectLabel}
        {...register(name)}
        onChange={handleChange}
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
  )
}

export default FictSelect