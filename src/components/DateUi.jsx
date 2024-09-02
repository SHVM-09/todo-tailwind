import { useState, useEffect } from "react";

export const DateUi = () => {
  const [date, setDate] = useState("");
  //Date and time
  const handleDateTime = () => {
    const date = new Date();

    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    let formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

    // Remove the comma between the date and time
    formattedDate = formattedDate.replace(",", "");

    setDate(formattedDate);
  };

  // setInterval(handleDateTime, 1000);

  useEffect(() => {
    const interval = setInterval(handleDateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span className="text-sm font-semibold text-gray-100">{date}</span>;
};
