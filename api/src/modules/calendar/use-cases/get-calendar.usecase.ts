import { CalendarStore } from "../stores/calendar.store";

export class GetCalendarUseCase {
  constructor(private readonly calendarStore: CalendarStore) {}

  async execute(league?: string) {
    const events = await this.calendarStore.getCalendar();
    return league ? events.filter((event) => event.league === league) : events;
  }
}
