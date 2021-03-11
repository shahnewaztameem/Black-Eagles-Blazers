/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import malePhoto from '../../Photo/male.png';
import feMalePhoto from '../../Photo/female.png';
import Background from '../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faVenus, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './TeamDetails.css';

const TeamDetails = () => {
  const { teamId } = useParams();
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
      .then(response => response.json())
      .then(data => setTeamInfo(data.teams))
  }, [teamId]);


  return (
    <div>
      {teamInfo.map(team => {
        return (
          <div className="custom-bg-color text-white">
            <div className="header">
              <Background
                backgroundImage={team.strStadiumThumb}
                image={team.strTeamBadge} />
            </div>
            <div className="container">
              <div className="row individual-info-card mt-4 p-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h2 className="team-name mb-3">{team.strTeam}</h2>
                  <h6 className="team-founded">
                    <FontAwesomeIcon icon={faMapMarkedAlt} /> {' '}
                    Founded: {team.intFormedYear}
                  </h6>
                  <h6 className="team-country">
                    <FontAwesomeIcon icon={faFlag} /> {' '}
                    Country: {team.strCountry}
                  </h6>
                  <h6 className="team-sports-type">
                    <FontAwesomeIcon icon={faFutbol} /> {' '}
                    Sport Type: {team.strSport}
                  </h6>
                  <h6 className="team-gender">
                    {team.strGender.toLowerCase() === 'male' ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />}{' '}
                    Gender: {team.strGender}
                  </h6>
                </div>
                <div className="col-md-6">
                  {team.strGender.toLowerCase() === 'male' ? <img src={malePhoto} className="img-fluid" /> : <img src={feMalePhoto} className="img-fluid" />}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-4">
                  <div className="team-description">
                    {team.strStadiumDescription}
                  </div>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-md-12">
                  <div className="team-description">
                    {team.strDescriptionEN}
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="fb-icon mx-4">
                    <a href={`https://${team.strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                  </div>
                  <div className="fb-icon mx-4">
                    <a href={`https://${team.strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                  </div>
                  <div className="fb-icon mx-4">
                    <a href={`https://${team.strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};
export default TeamDetails;