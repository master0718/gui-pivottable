"use client"

export const parseTimeString = (timeValue: string) => {
    const timeStr = timeValue.replace(/\D+/gi, '');
    let hours = +timeStr.slice(0, 2) % 24;
    let mins = +timeStr.slice(2, 4).padEnd(2, '0');

    if (mins === 60) {
        hours++;
    }

    const valueHours = hours.toString().padStart(2, '0');
    const valueMins = (mins % 60).toString().padStart(2, '0');
    const time = `${valueHours}:${valueMins}`;

    return {
        time,
        valueHours,
        valueMins
    }
}