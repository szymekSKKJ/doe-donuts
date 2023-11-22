import { useEffect } from "react";
import { removeNotification } from "../Notifications";

interface notificationProps {
  notificationData: { id: string; type: string; content: string };
}

const Notification = ({ notificationData }: notificationProps) => {
  useEffect(() => {
    setTimeout(() => {
      removeNotification(notificationData.id);
    }, 4000);
  }, []);
  return <div className="notification">{notificationData.content}</div>;
};

export default Notification;
