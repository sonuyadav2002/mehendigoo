import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";
import { Platform } from "react-native";
import { secureStorage } from "../utils/storage";
import apiClient from "./api";
import Endpoints from "./endpoints";

WebBrowser.maybeCompleteAuthSession();

const redirectUri = makeRedirectUri({
  scheme: "mehendigoo",
  path: "auth",
});

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Platform.select({
      ios: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
      android: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
      default: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    }),
    redirectUri,
  });

  return { request, response, promptAsync };
}

export async function signInWithGoogle(idToken) {
  const { data } = await apiClient.post(Endpoints.googleLogin, {
    idToken,
    platform: Platform.OS,
  });
  await persistAuthData(data);
  return data;
}

export async function signInWithEmail(email, password) {
  const { data } = await apiClient.post(Endpoints.login, { email, password });
  await persistAuthData(data);
  return data;
}

export async function registerUser(userData) {
  const { data } = await apiClient.post(Endpoints.register, userData);
  await persistAuthData(data);
  return data;
}

export async function verifyOtp(email, otp) {
  const { data } = await apiClient.post(Endpoints.verifyOtp, { email, otp });
  await persistAuthData(data);
  return data;
}

export async function sendOtp(name, phone, role) {
  const url = `${apiClient.defaults.baseURL}${Endpoints.sendOtp}`;
  console.log("Sending OTP request to:", url);
  console.log("Request body:", { name, phone, role });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, role }),
  });

  const data = await res.json();

  if (!res.ok) {
    const err = new Error(data?.message || "Failed to send OTP");
    err.response = { data };
    throw err;
  }

  return data;
}

export async function verifyUserOtp(phone, otp, role) {
  const { data } = await apiClient.post(Endpoints.verifyUserOtp, {
    phone,
    otp,
    role,
  });
  const payload = data?.data || data;
  if (payload.token) {
    await secureStorage.setAccessToken(payload.token);
  }
  if (payload.user) {
    await secureStorage.setUserData(payload.user);
  }
  if (payload.user?.role) {
    await secureStorage.setUserRole(payload.user.role);
  }
  console.log("Token stored in verifyUserOtp:", payload.token ? "YES" : "NO");
  return payload;
}

export async function loginWithPhone(phone, role) {
  const { data } = await apiClient.post(Endpoints.loginWithPhone, {
    phone,
    role,
  });
  const payload = data?.data || data;
  if (payload.token) {
    secureStorage.setAccessToken(payload.token);
  }
  if (payload.accessToken) {
    secureStorage.setAccessToken(payload.accessToken);
  }
  if (payload.user) {
    secureStorage.setUserData(payload.user);
  }
  if (payload.user?.role) {
    secureStorage.setUserRole(payload.user.role);
  }
  return payload;
}

export async function refreshAccessToken() {
  const refreshToken = secureStorage.getRefreshToken();
  if (!refreshToken) throw new Error("No refresh token available");

  const { data } = await apiClient.post(Endpoints.refreshToken, {
    refreshToken,
  });

  secureStorage.setAccessToken(data.accessToken);
  if (data.refreshToken) {
    secureStorage.setRefreshToken(data.refreshToken);
  }
  return data.accessToken;
}

export async function signOut() {
  try {
    const notificationToken = secureStorage.getNotificationToken();
    if (notificationToken) {
      await apiClient.post(Endpoints.removeNotificationToken, {
        token: notificationToken,
      });
    }
  } catch (_) {
    // Proceed with local cleanup even if API fails
  }
  secureStorage.clearAll();
}

export async function persistAuthData(data) {
  secureStorage.setAccessToken(data.accessToken);
  if (data.refreshToken) {
    secureStorage.setRefreshToken(data.refreshToken);
  }
  secureStorage.setUserData(data.user);
  secureStorage.setUserRole(data.user.role);
}
