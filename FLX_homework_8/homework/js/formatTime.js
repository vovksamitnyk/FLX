function formatTime (a) {
    const minutesInHour = 60;
    const minutesInDay = 24 * minutesInHour;

    let restOfMinutes = a % minutesInDay;

    let days = (a - a % minutesInDay) / minutesInDay;
    let hours = (restOfMinutes - restOfMinutes % minutesInHour) / minutesInHour;
    let minutes = restOfMinutes % minutesInHour;

    return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)"
}
formatTime(0);
formatTime(1);
formatTime(1501);
formatTime(4503);
formatTime(120);
formatTime(59);
formatTime(61);
formatTime(1440);
formatTime(1439);
formatTime(1500001);
formatTime(0.5);
formatTime(0.007);
formatTime(1440.007);
formatTime(1440-.007);
