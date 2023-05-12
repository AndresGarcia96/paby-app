import React from 'react';
import styles from './Dash.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

const Dash = () => {
  const { isAuthenticated } = useAuth0();

//   const data = {
//     sub: user?.sub,
//     name: user?.name,
//     email: user?.email,
//     photo: user?.picture,
//   };

//   const sendDataToBackend = async () => {
//     try {
//       const response = await axios.post('/users',data,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
// });
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
  // };

  return (
    <div className={styles.dash}>
      <ul className={styles.dashList}>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/profile" className={styles.dashLink}><button>Perfil</button></Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/vehicles" className={styles.dashLink}>Mis Vehiculos</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/reservations-history" className={styles.dashLink}>Mis Reservas</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/parking-lot-filter" className={styles.dashLink}>Hacer reserva</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<span className={styles.dashLink}>Soporte en línea</span>) : null}
        </li>
        <li className={styles.dashItem} >
        {isAuthenticated ? (   <Link to="/Shopping"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="35px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="color_17_">
	<g>
		<path fill="#898CC5" d="M45,17H16c-0.553,0-1,0.447-1,1l2,15c0,0.553,0.447,1,1,1h23c0.553,0,1-0.447,1-1l4-15
			C46,17.447,45.553,17,45,17z"/>
	</g>
</g>
<g id="outline_16_">
	<g>
		<path fill="#384D68" d="M17,40c-1.656,0-3,1.343-3,3s1.344,3,3,3s3-1.343,3-3S18.656,40,17,40z M17,44c-0.553,0-1-0.447-1-1
			s0.447-1,1-1s1,0.447,1,1S17.553,44,17,44z M41.952,31.238l0.019,0.004l4-16l-0.019-0.004C45.972,15.16,46,15.084,46,15
			c0-0.553-0.447-1-1-1H11.629L9.989,2.854L9.971,2.857C9.899,2.376,9.502,2,9,2H3C2.447,2,2,2.447,2,3s0.447,1,1,1h5.137
			l4.874,33.146l0.019-0.003C13.101,37.624,13.498,38,14,38h28c0.553,0,1-0.447,1-1s-0.447-1-1-1H14.863l-0.588-4H41
			C41.468,32,41.843,31.672,41.952,31.238z M14,30c-0.006,0-0.012,0.004-0.018,0.004L11.922,16h31.797l-1,4H19c-0.553,0-1,0.447-1,1
			s0.447,1,1,1h23.219l-0.5,2H26c-0.553,0-1,0.447-1,1s0.447,1,1,1h15.219l-1,4H14z M38,40c-1.656,0-3,1.343-3,3s1.344,3,3,3
			s3-1.343,3-3S39.656,40,38,40z M38,44c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S38.553,44,38,44z"/>
	</g>
</g>
</svg></Link>) : null}
        </li>
        {/* <li className={styles.dashItem}>
          {isAuthenticated ? (<span className={styles.dashLink}>Métodos de pago</span>) : null}
        </li> */}
      </ul>
    </div>
  );
};

export default Dash;

