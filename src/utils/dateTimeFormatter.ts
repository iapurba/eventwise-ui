export const formatToMonthDayString = (inputDateStr: string): string => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const [day, monthIndex] = inputDateStr.split('-');
    const formattedMonth = months[parseInt(monthIndex, 10)-1]
    const formattedDay = Number(day);
    
    return `${formattedMonth} ${formattedDay}`
};