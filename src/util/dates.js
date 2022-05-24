export const readableDateDiff = (olderDate, newerDate) => {
    const hoursDiff = (((newerDate - olderDate) / 1000) / 60) / 60; // hours
    if (hoursDiff > 24) {
        // days
        const daysDiff = hoursDiff / 24;
        return "less than " + Math.ceil(daysDiff) + " days";
    } else if (hoursDiff > 1) {
        // hours
        const hours = Math.floor(hoursDiff);
        return hours + " hour" + (hours === 1 ? "" : "s");
    } else {
        // minutes
        const minutesDiff = Math.round(hoursDiff * 60);
        return minutesDiff + " minutes";
    }
};