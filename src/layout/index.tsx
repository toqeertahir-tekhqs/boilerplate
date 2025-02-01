import { CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import MenuAntD from "./menu";

const Layout = ({
    children,
    isPrivate,
    token,
}: {
    children: React.ReactNode;
    isPrivate: boolean;
    token: string | null;
}) => {
    const [sidebarOpenClose, setSidebarOpenClose] = useState<boolean>(
        window.innerWidth < 640
    );
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
                    <div className="h-20">Logo + App Name</div>
                    <div
                        className="h-[calc(100vh-164px)] overflow-y-auto border-solid border-[2px] border-[#002a36]"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <MenuAntD />
                    </div>
                    <div className="h-20">Logo + App Name</div>
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
                <div className="static h-20 bg-[#ffffff]">
                    <div>Breadcrumb</div>
                    <div>Breadcrumb1</div>
                </div>

                {/* Page Content */}
                <div
                    className="h-[calc(100vh-188px)] overflow-y-auto m-2 border-solid border-[6px] border-[#ffffff]"
                    style={{
                        scrollbarWidth: "none",
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
