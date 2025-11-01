import { CalendarStore } from "./calendar.store";
import { FAKE_EVENTS } from "@scoreboard/types";

export class FakeCalendarStore implements CalendarStore {
  constructor() {}

  async getCalendar() {
    return FAKE_EVENTS;
  }
}
