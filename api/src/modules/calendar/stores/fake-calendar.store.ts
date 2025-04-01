import { CalendarStore } from "./calendar.store";
import { FAKE_EVENTS } from "@scoreboard/types";

export class FakeCalendarStore implements CalendarStore {
  constructor() {}

  getCalendar(league?: string) {
    if (league) return FAKE_EVENTS.filter((game) => game.league === league);
    return FAKE_EVENTS;
  }
}
