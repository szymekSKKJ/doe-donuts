import { signal } from "@preact/signals-react";
import "./Notifications.scss";
import Notification from "./Notification/Notification";

const notificationsQueue = signal<{ type: string; id: string; content: string }[]>([]);

type notificationTypesTypes = "unknown";

const notificationTypes = [
  {
    type: "unknown",
    content: "Coś poszło nie tak. Przepraszamy",
  },
];

export const addNotification = (type: notificationTypesTypes) => {
  const notifications = [...notificationsQueue.value];

  const foundNotification = notificationTypes.find((notification) => notification.type === type)!;

  notifications.push({
    id: crypto.randomUUID(),
    type: type,
    content: foundNotification.content,
  });

  notificationsQueue.value = notifications;
};

export const removeNotification = (id: string) => {
  const notifications = [...notificationsQueue.value];

  const foundNotification = notifications.find((notification) => notification.id === id)!;

  const index = notifications.indexOf(foundNotification);

  notifications.splice(1, index);

  notificationsQueue.value = notifications;
};

const Notifications = () => {
  return (
    <div className="notifications">
      {notificationsQueue.value.map((notification) => {
        const { id } = notification;

        return <Notification key={id} notificationData={notification}></Notification>;
      })}
    </div>
  );
};

export default Notifications;
