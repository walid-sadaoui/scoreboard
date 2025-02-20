import { FakeStandingsStore } from "../store/fake-standing-store";
import { standingsUseCase } from "./standings-use-case";

describe("Standings Use Case", () => {
  it("should return the standings of Premier League with position and teamName", () => {
    // pour l'instant je retourne un tableau en dur
    // maintenant je vais faire un appel à l'API
    const standingsStore = new FakeStandingsStore();
    const premierLeagueStandings = standingsStore.getStandings();
    const standings = standingsUseCase();
    expect(standings).toEqual(premierLeagueStandings);
  });
});
