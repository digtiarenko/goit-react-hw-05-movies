import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../Services/fetchMethods';
import defaultPic from './default.jpg';
import styles from './Cast.module.css';

function Cast() {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    fetchCredits(movieId).then(casts => setCast(casts));
  }, [movieId]);

  return (
    <div>
      {casts && (
        <ul className={styles.castList}>
          {casts.map(cast => (
            <li key={cast.id} className={null}>
              <img
                src={
                  cast.profile_path
                    ? `${BASE_URL}${cast.profile_path}`
                    : defaultPic
                }
                alt={cast.title}
                width="100"
                height="150"
              />
              <p className={null}>{cast.name}</p>
            </li>
          ))}
        </ul>
      )}
      {/* <Outlet /> */}
    </div>
  );
}
export default Cast;
