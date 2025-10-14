import { CalendarStore } from "../stores/calendar.store";

export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  async execute(league?: string) {
    return await this.calendarStore.getCalendar(league);
  }
}
