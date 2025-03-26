//date time formater
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formattedDate: string = date.toLocaleString('en-US', { ...options, timeZone: 'UTC' });

    return formattedDate.replace(',', '');
}