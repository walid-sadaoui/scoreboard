import { CalendarEvent } from "./calendar-event.entity";

export interface CalendarStore {
  getCalendar(league?: string): CalendarEvent[];
}
