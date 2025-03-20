import { CalendarStore } from "./calendar.store";

export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  execute(league?: string) {
    return this.calendarStore.getCalendar(league);
  }
}
