const formatTime = (date)=>{
    const objectDate = new Date(date);
    const hour = objectDate.getUTCHours();
    const minutes = objectDate.getUTCMinutes();

    const parsedHour = hour < 10 ? `0${hour}`: hour
    const parsedMinutes = minutes < 10 ? `0${minutes}`: minutes

    return `${parsedHour}:${parsedMinutes}`
}

export default formatTime