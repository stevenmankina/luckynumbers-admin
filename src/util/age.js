export const getAge = (dob) => {
  let today = new Date().getFullYear();
  let date = new Date(dob).getFullYear();

  return today - date;
};

export const getDate = (timestamp) => {
  
  return timestamp.slice(0, 10);

};

export const getTime = (timestamp) => {
  return timestamp.slice(11, 16);
};

export const getDateInput = (timestamp) => {
  let day = new Date(timestamp).getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = new Date(timestamp).getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let year = new Date(timestamp).getFullYear();

  return `${year}-${month}-${day}`;
};

export const timeInMilliseconds = (t) => {
  let str = `1970-01-01T${t}Z`;

  return Date.parse(str);
};

export const getSeconds = (time) => {
  let timeArr = time.split(':');

  return parseInt(timeArr[0])*60*60 + parseInt(timeArr[1])*60 + parseInt(timeArr[2]);
}
