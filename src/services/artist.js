import apiClient from "./api";
import Endpoints from "./endpoints";
import { secureStorage } from "../utils/storage";

export async function createArtistProfile(profileData) {
  const token = await secureStorage.getAccessToken();
  const userData = await secureStorage.getUserData();
  const userId = userData?.id || userData?.user_id || "";

  const formData = new FormData();

  formData.append("user_id", String(userId));
  formData.append("bio", profileData.bio || "");
  formData.append("experience_years", String(profileData.experience_years || 0));
  formData.append("price_start", String(profileData.price_start || 0));
  formData.append("home_service", profileData.home_service ? "true" : "false");
  formData.append("salon_service", profileData.salon_service ? "true" : "false");
  formData.append("is_available", "true");
  formData.append("latitude", String(profileData.latitude || "0"));
  formData.append("longitude", String(profileData.longitude || "0"));
  formData.append("last_location_update", new Date().toISOString());

  if (profileData.aadhaar_front) {
    formData.append("aadhaar_front", {
      uri: profileData.aadhaar_front,
      type: "image/jpeg",
      name: `aadhaar_front_${Date.now()}.jpg`,
    });
  }

  if (profileData.aadhaar_back) {
    formData.append("aadhaar_back", {
      uri: profileData.aadhaar_back,
      type: "image/jpeg",
      name: `aadhaar_back_${Date.now()}.jpg`,
    });
  }

  if (profileData.selfie_image) {
    formData.append("selfie_image", {
      uri: profileData.selfie_image,
      type: "image/jpeg",
      name: `selfie_${Date.now()}.jpg`,
    });
  }

  console.log("Using token for artist profile:", token ? `${token.substring(0, 30)}...` : "NO TOKEN");

  const { data } = await apiClient.post(Endpoints.artistProfile, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data?.data || data;
}
