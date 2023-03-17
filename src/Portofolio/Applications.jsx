import { Link, Outlet } from "react-router-dom";
const Applications = () => {
   // const params = useParams();
return(
    <div className="text-center">
       <h2 className="mt-4">Welcome to My Applications Website</h2>
       <hr />
       <h4>Choose an Application that you want to try!</h4>
       <nav className="d-flex justify-content-around flex-nowarp">
         <Link className="linkApps" to="yourCashflow">
         Your Cashflow
         </Link>
         <Link className="linkApps" to="todoList">
         Todo List
         </Link>
         <Link className="linkApps" to="smart">
         S.M.A.R.T
         </Link>
       </nav>
      <Outlet />
    </div>
);
};

export default Applications;