import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import Colors from "../constants/Colors";
import apiClient from "./api";
import Endpoints from "./endpoints";
import { secureStorage } from "../utils/storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) {
    return null;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    return null;
  }

  const tokenData = await Notifications.getExpoPushTokenAsync({
    projectId: Constants.expoConfig?.extra?.eas?.projectId,
  });

  const token = tokenData.data;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "Default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: Colors.primary,
      sound: "default",
    });

    await Notifications.setNotificationChannelAsync("bookings", {
      name: "Bookings",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: Colors.primary,
      sound: "default",
    });

    await Notifications.setNotificationChannelAsync("payments", {
      name: "Payments",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: Colors.primary,
      sound: "default",
    });

    await Notifications.setNotificationChannelAsync("promotions", {
      name: "Promotions",
      importance: Notifications.AndroidImportance.DEFAULT,
      sound: "default",
    });
  }

  return token;
}

export async function sendNotificationTokenToServer(token) {
  const existingToken = secureStorage.getNotificationToken();
  if (existingToken === token) return;

  try {
    await apiClient.post(Endpoints.registerNotificationToken, {
      token,
      platform: Platform.OS,
      deviceName: Device.deviceName || "Unknown",
    });
    secureStorage.setNotificationToken(token);
  } catch (_) {
    // Will retry on next app launch
  }
}

export async function removeNotificationToken() {
  const token = secureStorage.getNotificationToken();
  if (!token) return;

  try {
    await apiClient.post(Endpoints.removeNotificationToken, { token });
  } catch (_) {
    // Proceed with local cleanup
  }
  secureStorage.removeNotificationToken();
}

export async function scheduleLocalNotification({ title, body, data, delaySeconds = 0 }) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: data || {},
      sound: "default",
      ...(Platform.OS === "android" && { channelId: data?.channelId || "default" }),
    },
    trigger: delaySeconds > 0
      ? { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: delaySeconds }
      : null,
  });
}

export function addNotificationReceivedListener(callback) {
  const subscription = Notifications.addNotificationReceivedListener((notification) => {
    callback(notification);
  });
  return subscription;
}

export function addNotificationResponseReceivedListener(callback) {
  const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
    callback(response);
  });
  return subscription;
}

export function getLastNotificationResponse() {
  return Notifications.getLastNotificationResponseAsync();
}

export async function getBadgeCount() {
  return Notifications.getBadgeCountAsync();
}

export async function setBadgeCount(count) {
  await Notifications.setBadgeCountAsync(count);
}

export async function clearBadge() {
  await Notifications.setBadgeCountAsync(0);
}
