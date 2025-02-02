import { CloseCircleOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuAntD from "./menu";

const Layout = ({
    children,
    isPrivate,
    token
}: {
    children: React.ReactNode;
    isPrivate: boolean;
    token: string | null;
}) => {
    const [sidebarOpenClose, setSidebarOpenClose] = useState<boolean>(
        window.innerWidth < 640
    );
    // Get current route
    const location = useLocation();
    const pathSnippets = location.pathname.split("/").filter((i) => i);

    // Generate breadcrumb items dynamically
    const breadcrumbItems = [
        { title: <Link to="/">Home</Link>, path: "/" }, // Home Link
        ...pathSnippets.map((snippet, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
            return { title: <Link to={url}>{snippet}</Link>, path: url };
        }),
    ];
    return !isPrivate && !token ? (
        <> {children} </>
    ) : (
        <div className="flex relative">
            <div
                className={`h-[100vh] z-50 bg-[#002a36] ${sidebarOpenClose ? "max-sm:hidden" : ""
                    } max-sm:absolute`}
                style={{ scrollbarWidth: "none" }}
            >
                <div>
                    <div className="h-20" style={{ borderBottom: '1px solid #ffffff' }}>Logo + App Name</div>
                    <div
                        className="h-[calc(100vh-166px)] overflow-y-auto border-solid border-[2px] border-[#002a36]"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <MenuAntD />
                    </div>
                    <div className="h-20"
                        style={{ borderTop: '1px solid #ffffff' }}
                    >Logo + App Name</div>
                </div>
            </div>

            {/* Sidebar Toggle Button */}
            <div
                className="sm:hidden absolute top-12 z-50"
                onClick={() => setSidebarOpenClose(!sidebarOpenClose)}
            >
                <CloseCircleOutlined />
            </div>

            {/* Main Content */}
            <div className="w-full">
                {/* Header */}
                <div className="static h-20 bg-[#ffffff] flex items-center">
                    <Breadcrumb
                        items={breadcrumbItems}
                    />
                </div>

                {/* Page Content */}
                <div
                    className="h-[calc(100vh-188px)] overflow-y-auto m-2 border-solid border-[6px] border-[#f8f8f2] bg-[#f8f8f2]"
                    style={{
                        scrollbarWidth: "none"
                    }}
                >
                    {children}
                </div>

                {/* Footer */}
                <div className="static h-20 bg-[#ffffff]">
                    <div>Breadcrumb</div>
                    <div>Breadcrumb1</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
