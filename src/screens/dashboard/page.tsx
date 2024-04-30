import { DashboardNavbar, SideBar } from "@/components";

const Dashboard = () => {
    return ( <div className="absolute top-0 left-0 w-full h-screen flex">
        <SideBar />
        <div className="w-full flex flex-col gap-5">
            <DashboardNavbar />
        </div>
    </div> );
}
 
export default Dashboard;