const Sidebar = () => {
    const navItems = ["DASHBOARD", "CATEGORIES", "PRODUCTS", "INVENTORY"];

    return (
        <div className=" flex h-[100%] flex-col">
            <ul className="flex flex-col divide-y divide-stone-200 border-b-[1px]">
                {navItems.map((item) => (
                    <li className="hover:bg-colorPrimary100 cursor-pointer px-6 py-4 transition-colors duration-300">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Sidebar;
