import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const CustomSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>('0');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" sx={{ ml: 1 }} size='small'>
      <Select
        value={selectedValue}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>0</MenuItem>
        {Array.from({ length: 10 }, (_, index) => (
          <MenuItem key={index + 1} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;