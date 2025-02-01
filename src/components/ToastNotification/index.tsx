import { CheckOutlined } from "@ant-design/icons";
import { toast } from "react-hot-toast";

type ToastType = "success" | "error";

const ToastNotification = (type: ToastType, message: string): void => {
  const notify = () => {
    const toastId = toast.custom(
      () => (
        <div className="bg-[#FFFFFF] rounded-[10px] py-[10px] px-[10px] flex items-center space-x-[10px]">
          <div className="flex items-center justify-center bg-[#0B89CA] rounded-[5px] p-[10px]">
            <CheckOutlined />
          </div>
          <div className="text-[#505050] text-[14px] font-bold fontMonospace">
            {message}
          </div>
        </div>
      ),
      {
        duration: 2000, // Prevent auto-dismiss
        position: "top-center",
      }
    );

    // Automatically unmount the toast after 1 second
    setTimeout(() => toast.dismiss(toastId), 2000);
  };

  notify();
};

export default ToastNotification;
