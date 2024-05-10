import { google, outlook, office365, yahoo, ics } from "calendar-link";

export default function AddToCalendar() {


  const event = {
    title: "Event Title",
    description: "Event Description",
    location: "Event Location",
    startTime: new Date(),
    endTime: new Date(),
    timeZone: "UTC",

  return <div>AddToCalendar</div>;
}
