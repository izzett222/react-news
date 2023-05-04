import { Outlet } from "react-router-dom";

export default function Layout() {
    return <div className="mx-auto max-w-[1120px] px-4">
        <div>header</div>
        <div>
            <Outlet />
        </div>
    </div>
}