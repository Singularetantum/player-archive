import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PlayerDetails from './Components/PlayerDetails';
import { PlayerProfileData, PlayerData } from './Types/Player';

function App() {
  const [playerData, setPlayerData] = useState<PlayerData>();
  const [playerProfileData, setPlayerProfileData] = useState<PlayerProfileData>();

  const api = 'https://web-sandbox.onefootball.com';

  async function search(query: string) {
    await axios.get<PlayerData>(`${api}/assignments/player/data/${query}.json`)
      .then(result => setPlayerData(result.data))
      .catch(error => setPlayerData({error: true}));
  }

  async function fetchPlayerProfileData(profileId: string) {
    await axios.get<PlayerProfileData>(`${api}/assignments/player/profile/${profileId}`)
      .then(result => setPlayerProfileData(result.data))
      .catch(error => setPlayerData({error: true}));
  }

  useEffect(() => {
    if (!playerData || playerData.error || playerData.active === 'false') {
      setPlayerProfileData(undefined);
    } else if (playerData['profile-id']) {
      fetchPlayerProfileData(playerData['profile-id']);
    }
  }, [playerData]);

  return (
    <div className="min-h-screen px-4 py-4 flex flex-col justify-center">
      <div className="sm:max-w-xl sm:mx-auto">
        <header>
          <h1 className="text-2xl font-extrabold text-primary mt-2 mb-2">Player Archive</h1>
        </header>
        <SearchForm search={search}/>
        {playerData && <div className="px-4 py-4 bg-secondary border border-gray-divider rounded p-2">
          <div className="max-w-md mx-auto">
            {playerData.active === 'true' && playerProfileData && <PlayerDetails playerData={playerData} playerProfileData={playerProfileData}></PlayerDetails>}
            {(playerData.active === 'false' || playerData.error) && <span className="flex items-center justify-center text-sm font-medium py-4">The player is not available.</span>}
          </div>
        </div>}
    </div>
    </div>
  );
}

export default App;
