function timeWord(time) {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3));

    const hourWords = [
        "twelve", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven"
    ];

    const minuteWords = [
        "oh", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen",
        "twenty", "twenty one", "twenty two", "twenty three",
        "twenty four", "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine"
    ];

    const ampm = hours < 12 ? "am" : "pm";
    const hour = hours % 12 === 0 ? 12 : hours % 12;
    const minute = minutes === 0 ? "o'clock" : (minutes < 10 ? "oh " + minuteWords[minutes] : minuteWords[minutes]);

    if (time = "00:00") {
        return "midnight";
    } else if (time === "12:00") {
        return "noon";
    } else {
        return `${hourWords[hour]} ${minute} ${ampm}`;
    }
};