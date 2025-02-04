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

    return !isPrivate && !token ? (
        <> {children} </>
    ) : (
        <div className="flex">
            {/* Main Content */}
            <div className="w-full">
                {/* Header */}
                <div className="static h-20 bg-[#ffffff] flex justify-between items-center px-10 border-0 border-b-[1px] border-solid border-[#EAECF0] shadow-sm">
                    <MenuAntD />
                </div>

                {/* Page Content */}
                <div
                    className="max-h-[calc(100vh-173px)] overflow-y-auto mx-10 my-10 border-solid border-[6px] border-[#FCFCFD] bg-[#FCFCFD] rounded-lg"
                    style={{
                        scrollbarWidth: "none",
                        boxShadow: '0px 1px 3px 1px #1018281A'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
