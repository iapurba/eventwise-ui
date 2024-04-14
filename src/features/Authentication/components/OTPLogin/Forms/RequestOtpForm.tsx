import React, { useState } from "react";
import { useRequestOtpMutation } from "../../../authApi";
import Box from "@mui/material/Box";
import CustomTextField from "../../../../../common/CustomTextField/CustomTextField";
import MainButton from "../../../../../common/Button/MainButton/MainButton";

interface RequestOtpFormProps {
    onSuccess: (email: string) => void;
}

const RequestOtpForm: React.FC<RequestOtpFormProps> = ({ onSuccess }) => {
    const [email, setEmail] = useState<string>('');
    const [requestOtp, { isLoading }] = useRequestOtpMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await requestOtp({ email });
        onSuccess(email);
    };

    return (
        <Box component="form" display="flex" flexDirection="column">
            <CustomTextField
                styleType='borderOnly'
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="Email Address"
                sx={{ mt: 1 }}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus={true}
            />
            <MainButton
                sx={{ mt: 2, p: 3 }}
                label='CONTINUE'
                onClick={handleSubmit}
                disabled={isLoading}
            />
        </Box>
    );
};

export default RequestOtpForm;