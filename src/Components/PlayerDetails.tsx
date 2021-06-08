import React from 'react';
import { PlayerData, PlayerProfileData } from '../Types/Player';

interface Props {
  playerData: PlayerData;
  playerProfileData: PlayerProfileData;
}

const PlayerDetails: React.FC<Props> = ({ playerData, playerProfileData }: Props) => {
  return (<dl>
    <div className="justify-between flex items-baseline px-6 py-1">
      <dt className="uppercase text-xs font-semibold">
        Id
      </dt>
      <dd>
        {playerData?.id}
      </dd>
    </div>

    <div className="justify-between flex items-baseline px-6 py-1 mb-6">
      <dt className="uppercase text-xs font-semibold">
        Active
      </dt>
      <dd>
        {playerData?.active}
      </dd>
    </div>

    <div className="justify-between flex items-baseline px-6 py-1">
      <dt className="uppercase text-xs font-semibold">
        Age
      </dt>
      <dd>
        {playerProfileData?.profile?.age}
      </dd>
    </div>

    <div className="justify-between flex items-baseline px-6 py-1">
      <dt className="uppercase text-xs font-semibold">
        Role
      </dt>
      <dd>
        {playerProfileData?.profile?.role}
      </dd>
    </div>

    <div className="justify-between flex items-baseline px-6 py-1">
      <dt className="uppercase text-xs font-semibold">
        Team
      </dt>
      <dd>
        {playerProfileData?.profile?.team}
      </dd>
    </div>
  </dl>);
};

export default PlayerDetails;
