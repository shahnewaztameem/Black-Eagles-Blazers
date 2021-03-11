import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './Teams.css';

const Teams = (props) => {
  const { idTeam, strTeam, strTeamBadge, strSport } = props.team
  return (
    <div className="col-md-4">
      <div className="card my-4 text-center d-block mx-auto">
        <img className="img-fluid mt-4 w-50" src={strTeamBadge} alt={strTeam} />
        <div className="card-body">
          <h5 className="card-title">{strTeam}</h5>
          <h6 className="card-title text-secondary">Sports Type: {strSport}</h6>
          <Link to={`/team/${idTeam}`}>
            <button className="explore-btn mt-4">
              <span>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></span>
            </button>
          </Link>
        </div>
      </div>
    </div>


  );
};

export default Teams;