import { CalendarEvent } from "@scoreboard/types";

export interface CalendarStore {
  getCalendar(league?: string): CalendarEvent[];
}
