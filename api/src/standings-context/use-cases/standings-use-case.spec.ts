import { standingsUseCase } from "./standings-use-case";

describe("Standings Use Case", () => {
  it("should return the standings of Premier League with position and teamName", () => {
    const standings = standingsUseCase();
    expect(standings).toEqual([
      {
        position: 1,
        teamName: "Liverpool",
      },
    ]);
  });
});
