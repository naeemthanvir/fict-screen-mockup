import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioBtns({ defaultValue, name, options, register}) {

    const radioOptions = options.map((e) => {
        return <FormControlLabel key={e.value} sx={{
            fontSize: "12px!important",
            "& .MuiTypography-root": {
                fontSize: "12px!important"
            }
        }} value={e.value} control={<Radio sx={{
            "&.Mui-checked": {
              color: "#1b3e6e",
            },
          }} />} label={e.label} />
    })
  return (
    <FormControl>
      <FormLabel style={{fontSize: "12px", color: "#1b3e6e"}}><strong>Split schedule using social distancing?</strong></FormLabel>
      <RadioGroup
        row
        defaultValue={defaultValue}
        name={name}
        {...register(name)}
      >
        {radioOptions}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBtns