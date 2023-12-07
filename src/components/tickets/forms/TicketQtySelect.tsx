import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

interface TicketQtySelectProps {
  maxQty: number,
  onValueChange: (qty: any) => void,
};

const TicketQtySelect: React.FC<TicketQtySelectProps> = ({ maxQty, onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState<any>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ ml: 1 }} size='small'>
      <Select
        value={selectedValue}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>0</MenuItem>
        {Array.from({ length: maxQty }, (_, index) => (
          <MenuItem key={index + 1} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TicketQtySelect;