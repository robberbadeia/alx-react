import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

function getAllNotificationsByUser(userId) {
  return notificationData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

const normalized = normalize(notificationData, [notification]);


export { getAllNotificationsByUser, normalized, user, message, notification };
