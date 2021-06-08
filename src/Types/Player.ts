export type PlayerData = {
  id?: string;
  active?: string;
  "profile-id"?: string;
  error: boolean;
}

export type PlayerProfile = {
  age: string;
  role: string;
  team: string;
  picture: string;
}

export type PlayerStats= {
  blocks: string;
  totalTackles: string;
  interceptions: string;
  tacklesWon: string;
  yellowCards: string;
  passingAccuracy: string;
  clearances: string;
  totalCrosses: string;
  aerialDuelsWon: string;
  minutesPlayed: string;
  minutesPerGoal: string;
  headedGoals: string;
  foulsConceded: string;
  totalPasses: string;
  totalShots: string;
  otherGoals: string;
  duelsWon: string;
  shotsOnTarget: string;
  leftFootGoals: string;
  rightFootGoals: string;
  starts: string;
  goalsFromInsideBox: string;
  substitutionOff: string;
  foulsWon: string;
  assists: string;
  gamesPlayed: string;
  substitutionOn: string;
  redCards: string;
  goals: string;
  successfulCrosses: string;
  goalsFromOutsideBox: string;
}

export type PlayerProfileData = {
  id: string;
  profile: PlayerProfile;
  stats: PlayerStats;
}
