import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRoutes } from "routes";
import AuthRoute from "routes/AuthRoute";
import { RouteConfig } from "type/types";
import './App.less';

function App() {
  return (
    <div className="h-[100vh]">
      <Toaster position="top-center" reverseOrder={false} />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#002a36",
            colorSuccess: "#002a36",
            fontFamily: "sans-serif",
            // colorBgTextHover: "transparent",
            colorLink: "#002a36",
            colorLinkHover: "#002a36e4",
            fontSize: 12,
          },
          components: {
            Layout: {
              bodyBg: "#efe8d7",
              headerBg: "#ffffff",
              siderBg: "#002a36",
              headerHeight: 0,
              headerPadding: "0 0px",
            },
            Collapse: {
              // contentBg: "#FFFFFF66",
              // headerBg: "#FFFFFF66",
            },
            Menu: {
              fontSize: 16,
              itemMarginInline: 0,
              itemColor: "#EFE8D7",
              itemBg: "#002a36",
              itemSelectedColor: "#002a36",
              itemSelectedBg: "#EFE8D7",
              itemHoverColor: "#002a36",
              itemHoverBg: "#EFE8D7",
              itemActiveBg: "#EFE8D7",
              popupBg: "#002a36",
              subMenuItemBg: "#002a36",
              subMenuItemSelectedColor: "#EFE8D7",
              subMenuItemBorderRadius: 8,
              itemHeight: 48,
              itemBorderRadius: 8,
              itemMarginBlock: 0,
              activeBarHeight: 48,
              iconSize: 20,
              groupTitleColor: "#002a36",
              groupTitleFontSize: 16,
            },
            Table: {
              headerBg: "#F8F8F2",
              headerColor: "#1E1E1E",
              bodySortBg: "#F8F8F2",
              borderColor: "#f0f0f0",
              headerSplitColor: "#F8F8F2",
              rowHoverBg: "#F8F8F2",
              headerFilterHoverBg: "",
              headerSortHoverBg: "#F8F8F2",
              headerSortActiveBg: "#F8F8F2",
              rowExpandedBg: "#F8F8F2",
              fontSize: 16,
              fontWeightStrong: 600,
              headerBorderRadius: 0,
              // backgroundColor: "#000000",
            },
            Pagination: {
              // itemActiveBg: "#002a36",
              colorBgTextActive: "#ffffff",
              colorTextPlaceholder: "#ffff",
              colorTextDescription: "#ffff",
            },
            Button: {
              defaultColor: "#002a36",
              defaultBorderColor: "#505050",
              primaryShadow: "0 0 0",
              defaultShadow: "0 0 0",
              borderRadius: 8,
              paddingBlock: 6,
              paddingInline: 20,
              colorPrimaryHover: "#002a36f1",
              defaultHoverColor: "#505050",
              defaultHoverBorderColor: "#505050",
              colorTextDisabled: "#fff",
              colorBgContainerDisabled: "#002a36f1",
            },
            Switch: {
              colorPrimary: "#092029",
              handleBg: "#44CBFF",
              colorPrimaryHover: "#092029",
            },
            Tabs: {
              itemColor: "#505050",
              horizontalItemGutter: 20,
              horizontalItemPaddingLG: "10px 20px",
              fontSize: 12,
              titleFontSize: 12,
              itemHoverColor: "#002a36f1",
            },
            Upload: {
              colorTextHeading: "#002a36",
              controlHeightLG: 55,
              lineWidth: 2,
              colorBorder: "#707070",
              colorBgMask: "#ffffff",
              lineType: "solid",
            },
            Breadcrumb: {
              itemColor: "#000000",
              lastItemColor: "#000000",
              linkColor: "#000000",
              linkHoverColor: "#000000",
            },
            Progress: {
              colorSuccess: "#000000",
              circleIconFontSize: "50px",
              defaultColor: "#002a36",
              remainingColor: "#505050",
            },
            Radio: {
              // dotSize: 0,
              // radioSize: 10,
            },
            Tooltip: {},
            Input: {
              fontSize: 16,
            },
            Select: {
              activeBorderColor: "black",
              hoverBorderColor: "black",
              activeOutlineColor: "none",
              selectorBg: "transparent",
              optionActiveBg: "#FFF5F0",
              optionSelectedBg: "#EFE8D7",
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            {AllRoutes?.map((item: RouteConfig, index: number) => (
              <Route
                key={index}
                path={item?.path}
                element={
                  <AuthRoute
                    isPrivate={item?.isPrivate}
                  >
                    {item?.page}
                  </AuthRoute>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
