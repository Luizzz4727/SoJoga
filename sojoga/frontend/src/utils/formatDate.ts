const formatDate = (date)=>{
    const objectDate = new Date(date);
    const day = objectDate.getDate();
    const month = objectDate.getMonth() + 1;
    const year = objectDate.getFullYear();

    const parsedDay = day < 10 ? `0${day}`: day
    const parsedMonth = day < 10 ? `0${month}`: month

    return `${parsedDay}/${parsedMonth}/${year}`
}

export default formatDate