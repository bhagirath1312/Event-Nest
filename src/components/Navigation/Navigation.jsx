// import { Link } from "react-router-dom";
// import "./Navigation.css";
// import { useAuth } from "../User_authentication/AuthContext";

// const Navigation = () => {
//   const { isAuthenticated, logout } = useAuth();

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/find-events">Find Events</Link>
//         </li>
//         {!isAuthenticated && (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Signup</Link>
//             </li>
//           </>
//         )}
//         {isAuthenticated && (
//           <>
//             <li>
//             <Link to="/" onClick={logout}>Logout</Link>
//             </li>
//             <li>
//               <Link to="/addevent">Add Event</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;













// // Navigation.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../User_authentication/AuthContext';

// const Navigation = () => {
//     const { user } = useAuth(); // Destructure safely

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/find-events">Find Events</Link>
//                 </li>
//                 <li>
//                     <Link to="/addevent">Add Event</Link>
//                 </li>
//                 {user ? (
//                     <>
//                         <li>
//                             <Link to="/your_events">Your Events</Link>
//                         </li>
//                         <li>
//                             <Link to="/logout">Logout</Link>
//                         </li>
//                     </>
//                 ) : (
//                     <>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/signup">Sign Up</Link>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Navigation;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../User_authentication/AuthContext';

// const Navigation = () => {
//     const { user, logout } = useAuth();
 
//     return (
//         <>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/find-events">Find Events</Link>
//                 </li>
//                 {user && (
//                     <>
//                         <li>
//                             <Link to="/addevent">Add Event</Link>
//                         </li>
//                         <li>
//                             <Link to="/your_events">Your Events</Link>
//                         </li>
//                         <li>
//                             <Link to="/logout" onClick={logout}>Logout</Link>
//                         </li>
//                     </>
//                 )}
//                 {!user && (
//                     <>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/signup">Sign Up</Link>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
     
//         </>
        
//     );
// };

// export default Navigation;




// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../User_authentication/AuthContext';

// const Navigation = () => {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout(); 
//         navigate('/');  // Redirect to homepage after logout
//     };

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/find-events">Find Events</Link>
//                 </li>
//                 {user ? (
//                     <>
//                         <li>
//                             <Link to="/addevent">Add Event</Link>
//                         </li>
//                         <li>
//                             <Link to="/your_events">Your Events</Link>
//                         </li>
//                         <li>
//                             <button onClick={handleLogout}>Logout</button> {/* Logout as a button for better UX */}
//                         </li>
//                     </>
//                 ) : (
//                     <>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/signup">Sign Up</Link>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Navigation;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../User_authentication/AuthContext';
import './Navigation.css'; // Add a CSS file for styling

const Navigation = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/');  // Redirect to homepage after logout
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/find-events">Find Events</Link>
                </li>
                {token ? (
                    <> 
                        <li>
                            <Link to="/addevent">Add Event</Link>
                        </li>
                        <li>
                            <Link to="/your_events">Your Events</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;