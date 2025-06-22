 import { createBrowserRouter } from 'react-router-dom'
import Users from '../pages/users/Users';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';
import Demandes from '../pages/demandes/Demandes';

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
          path: "demandes",
          element: <Demandes />
        },
      ],
      },
      ],    
  },
]);

export {routes}
