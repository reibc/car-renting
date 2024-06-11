export function calculateTimeLeft(endDate: Date): string {
    const currentDate = new Date();
    const end = new Date(endDate);
    const timeDifference = end.getTime() - currentDate.getTime();


  
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference < 0) {
        return `Rental has Ended! : ${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds AGO! `
    }

    return `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds`;
}