const getMessageTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let isAfternoon = Boolean;

    if(minutes.toString().length < 2) {
        minutes = `${0}minutes`
    }

    if(hour > '12') {
        hour = `${hour - 12}`;
        isAfternoon = true;
    } else if (hour === '12') {
        hour = '12';
        isAfternoon = true;
    } else if (hour === '00') {
        hour = '12';
        isAfternoon = false;
    } else {
        hour = `${hour}`;
        isAfternoon = false
    }
    if(isAfternoon) {
        return `${hour}:${minutes}PM`;
    } else {
        return `${hour}:${minutes}AM`;
    }
}

export default getMessageTime;
