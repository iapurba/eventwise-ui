const fetchStateNameFromPincode = async (pincode: string) => {
    try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();

        if (data && data[0]?.Status === 'Success') {
            const stateName = data[0]?.PostOffice[0]?.State;
            return stateName || 'State Not Found';
        } else {
            return 'Invalid PIN';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'Error fetching data';
    }
};

export const getStateNameFromPincode = async (value: string) => {
    if (value.length === 6) {
        const state = await fetchStateNameFromPincode(value);
        const invalidState = (
            state === 'State Not Found' || state === 'Invalid PIN' ||
            state === 'Error fetching data'
        );
        return invalidState ? '' : state;
    };
    return '';
}