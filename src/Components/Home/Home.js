import React, { useEffect, useState } from 'react';
import Background from '../Background/Background';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
      .then(response => response.json())
      .then(data => setTeams(data.teams))
  }, []);

  return (
    <div className="custom-bg-color">
      <Background
        backgroundImage='https://www.thesportsdb.com/images/media/team/stadium/pigyw41550061064.jpg'
        image=''
        heading='Black Eagles Blazers'
      />
      <div className="container">
        <div className="row">
          {
            teams.map(team => <Teams key={team.idTeam} team={team} />)
          }
        </div>
      </div>
    </div>

  );
};

export default Home;