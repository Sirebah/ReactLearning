 import { createBrowserRouter } from 'react-router-dom'
import Users from '../pages/users/Users';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';
import Demandes from '../pages/demandes/Demandes';
import UserDetails from '../pages/userDetails/UserDetails';
import PostDetails from '../pages/postDetails/PostDetails';

 const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true,
        element: <App /> 
      },
      { path: "menu",
        element: <Dashboard />,
        children:[{
          path: "users",
          element: <Users />          
        },
        {
          path: "users/:userId",
          element: <UserDetails />          
        },  
        {
          path: "demandes",
          element: <Demandes />
        },
        {
          path: "demandes/:id",
          element: <PostDetails />
        },
      ],
      },
      ],    
  },
]);

export {routes}
