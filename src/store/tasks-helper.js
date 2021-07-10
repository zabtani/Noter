export const creationDate = () => {
  const today = new Date();
  let [dd, mm, hour, min] = [
    today.getDate(),
    today.getMonth() + 1,
    today.getHours(),
    today.getMinutes(),
  ];
  const [yyyy, day, weekDays] = [
    today.getFullYear(),
    today.getDay(),
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  ];

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (hour < 10) hour = '0' + hour;
  if (min < 10) min = '0' + min;
  const creationTime = ` ${weekDays[day]}, ${dd}/${mm}/${yyyy}, ${hour}:${min}`;
  return creationTime;
};
export const randId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
