import { CalendarStore } from "./calendar.store";
import { FAKE_EVENTS } from "./fake-calendar-events";

export class FakeCalendarStore implements CalendarStore {
  constructor() {}

  getCalendar(league?: string) {
    if (league) return FAKE_EVENTS.filter((game) => game.league === league);
    return FAKE_EVENTS;
  }
}
