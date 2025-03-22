import { CalendarController } from "./calendar.controller";

import { FAKE_EVENTS } from "../stores/fake-calendar-events";
import { FakeCalendarStore } from "../stores/fake-calendar.store";
import { GetCalendarUseCase } from "../use-cases/get-calendar.usecase";

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
