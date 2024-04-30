import Sidebar from "../ui/Sidebar.jsx";

const AdminPage = () => {
    return (
        <div className="flex">
            <div className="border-stone-150 h-[640px]  w-[80px] border-r-[1px] bg-colorPrimary150 md:h-dvh md:w-[300px]">
                <Sidebar />
            </div>
            <div className="h-dvh flex-1 flex-grow bg-colorPrimary100">
                {/* Content for the right div */}
            </div>
        </div>
    );
};

export default AdminPage;
