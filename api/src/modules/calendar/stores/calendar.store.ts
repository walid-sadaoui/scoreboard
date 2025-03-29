import { CalendarEvent } from "../entities/calendar-event.entity";

export interface CalendarStore {
  getCalendar(league?: string): CalendarEvent[];
}
