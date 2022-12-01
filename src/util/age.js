export const getAge = (dob) => {
    let today = new Date().getFullYear();
    let date = new Date(dob).getFullYear();

    return today - date;
}

export const getDate = (timestamp) => {
    let day = new Date(timestamp).getDate();
    let month = new Date(timestamp).getMonth();
    let year = new Date(timestamp).getFullYear();

    return `${day}-${month}-${year}`
}

export const getDateInput = (timestamp) => {

    let day = new Date(timestamp).getDate();
    if(day < 10) {
        day = `0${day}`
    }
    let month = new Date(timestamp).getMonth();
    if(month < 10) {
        month = `0${month}`
    }
    let year = new Date(timestamp).getFullYear();

    return `${year}-${month}-${day}`
}