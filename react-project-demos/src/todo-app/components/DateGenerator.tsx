const DateGenerator = () => {
  const dateTime = new Date();

  const day = dateTime.getDay();
  const month = dateTime.getMonth();
  const date = dateTime.getDate();

  const DateGeneratorFunction = () => {
    let dayName;
    let monthName;

    // Get day name
    switch (day) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "Invalid Day";
    }

    // Get short month name
    switch (month) {
      case 0:
        monthName = "Jan";
        break;
      case 1:
        monthName = "Feb";
        break;
      case 2:
        monthName = "Mar";
        break;
      case 3:
        monthName = "Apr";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "Jun";
        break;
      case 6:
        monthName = "Jul";
        break;
      case 7:
        monthName = "Aug";
        break;
      case 8:
        monthName = "Sep";
        break;
      case 9:
        monthName = "Oct";
        break;
      case 10:
        monthName = "Nov";
        break;
      case 11:
        monthName = "Dec";
        break;
      default:
        monthName = "Invalid Month";
    }

    return <h2>{`${dayName}, ${date} ${monthName}`}</h2>;
  };

  const getTodayDate = DateGeneratorFunction();

  return (
    <div className="text-[#636368] text-3xl font-medium h-fit">
      {getTodayDate}
    </div>
  );
};

export default DateGenerator;
