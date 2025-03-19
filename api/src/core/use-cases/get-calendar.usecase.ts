export class GetCalendarUseCase {
  constructor() {}

  execute(league?: string) {
    if (league === "Ligue 1")
      return [{ homeTeam: "PSG", awayTeam: "Olympique de Marseille" }];
    return [{ homeTeam: "PSG", awayTeam: "Liverpool" }];
  }
}
