import { CalendarController } from "./calendar.controller";

import { FAKE_EVENTS } from "./fake-calendar-events";
import { FakeCalendarStore } from "./fake-calendar.store";
import { GetCalendarUseCase } from "./get-calendar.usecase";

describe("Calendar Controller", () => {
  let fakeCalendarStore: FakeCalendarStore;
  let getCalendarUseCase: GetCalendarUseCase;
  let calendarController: CalendarController;

  beforeEach(() => {
    fakeCalendarStore = new FakeCalendarStore();
    getCalendarUseCase = new GetCalendarUseCase(fakeCalendarStore);
    calendarController = new CalendarController(getCalendarUseCase);
  });

  it("should return the list of all games", () => {
    expect(calendarController.findAll()).toEqual(FAKE_EVENTS);
  });
});
