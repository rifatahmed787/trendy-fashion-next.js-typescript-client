import moment from 'moment'; 

export const formatDateRange = (startDate:Date, endDate:Date) => {
    const start = moment(startDate).format('DD MMM').toUpperCase();
    const end = moment(endDate).format('DD MMM').toUpperCase();
    return `${start} - ${end}`;
  };