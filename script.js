// Add event listeners to each day's image
const days = [
  { id: "roseDay", messageId: "roseDayMessage" },
  { id: "proposeDay", messageId: "proposeDayMessage" },
  { id: "chocolateDay", messageId: "chocolateDayMessage" },
  { id: "teddyDay", messageId: "teddyDayMessage" },
  { id: "promiseDay", messageId: "promiseDayMessage" },
  { id: "hugDay", messageId: "hugDayMessage" },
  { id: "kissDay", messageId: "kissDayMessage" },
];

days.forEach((day) => {
  const dayElement = document.getElementById(day.id);
  const messageElement = document.getElementById(day.messageId);

  dayElement.addEventListener("click", () => {
    messageElement.classList.remove("hidden");
    messageElement.classList.add("revealed");
  });
});