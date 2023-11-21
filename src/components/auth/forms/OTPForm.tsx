import React, { useState, useRef, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const OTPContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const OTPDigitInput = styled(TextField)({
  width: '40px',
  height: '40px',
  margin: '0 5px',
  textAlign: 'center',
});

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null, null, null]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field
    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the previous input field on backspace
    if (event.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <OTPContainer>
      {otp.map((digit, index) => (
        <OTPDigitInput
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          variant="outlined"
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyPress(index, e)}
        />
      ))}
    </OTPContainer>
  );
};

export default OTPForm;
