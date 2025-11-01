import { CalendarEvent } from "@scoreboard/types";

export interface CalendarStore {
  getCalendar(): Promise<CalendarEvent[]>;
}
