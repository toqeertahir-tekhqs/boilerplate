import { footer } from "assets";
import { useLocation, useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="flex justify-between h-[60px] items-center">
        <div
          onMouseDown={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onContextMenu={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onClick={() => navigate("/")}
          className=" cursor-pointer"
        >
          {location?.pathname === "/" || location?.pathname === "" ? (
            <footer.Home />
          ) : (
            <footer.HomeFill />
          )}
        </div>
        <div
          onMouseDown={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onContextMenu={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onClick={() => navigate("/earn")}
          className=" cursor-pointer"
        >
          {location?.pathname === "/earn" ? (
            <footer.Earn />
          ) : (
            <footer.EarnFill />
          )}
        </div>
        <div
          onMouseDown={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onContextMenu={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onClick={() => navigate("/games")}
          className=" cursor-pointer"
        >
          {location?.pathname === "/games" ? (
            <footer.Game />
          ) : (
            <footer.GameFill />
          )}
        </div>
        <div
          onMouseDown={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onContextMenu={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onClick={() => navigate("/invite-friends")}
          className=" cursor-pointer"
        >
          {location?.pathname === "/invite-friends" ? (
            <footer.Friend />
          ) : (
            <footer.FriendFill />
          )}
        </div>
        <div
          onMouseDown={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onContextMenu={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            e.preventDefault()
          }
          onClick={() => navigate("/dashboard")}
          className=" cursor-pointer"
        >
          {location?.pathname === "/dashboard" ? (
            <footer.Setting />
          ) : (
            <footer.SettingFill />
          )}
        </div>
      </div>
    </div>
  );
}
