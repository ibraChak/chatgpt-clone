import { Outlet} from "react-router-dom";

function DashboardLayout() {
  return (
    <div className='Dashbordlayout'>
        <div className='menu'>Menu</div>
        <div className="content">
          <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout