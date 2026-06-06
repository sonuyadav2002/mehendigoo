import { createContext, useContext, useMemo, useState } from "react";

const ArtistOnboardingContext = createContext(null);

export function ArtistOnboardingProvider({ children }) {
  const [artistProfileCompleted, setArtistProfileCompleted] = useState(false);
  const [artistApproved, setArtistApproved] = useState(false);
  const [artistDetails, setArtistDetails] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
  });
  const [aadhaarFiles, setAadhaarFiles] = useState({
    front: null,
    back: null,
  });
  const [panFile, setPanFile] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [workSamples, setWorkSamples] = useState([]);

  const updateArtistDetails = (details) => {
    setArtistDetails((prev) => ({ ...prev, ...details }));
  };

  const updateAadhaarFiles = (files) => {
    setAadhaarFiles((prev) => ({ ...prev, ...files }));
  };

  const addWorkSample = () => {
    setWorkSamples((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        title: `Portfolio sample ${prev.length + 1}`,
      },
    ]);
  };

  const removeWorkSample = (sampleId) => {
    setWorkSamples((prev) => prev.filter((item) => item.id !== sampleId));
  };

  const submitArtistProfile = () => {
    setArtistProfileCompleted(true);
    setArtistApproved(false);
  };

  const value = useMemo(
    () => ({
      artistProfileCompleted,
      artistApproved,
      artistDetails,
      aadhaarFiles,
      panFile,
      profilePhoto,
      workSamples,
      updateArtistDetails,
      updateAadhaarFiles,
      setPanFile,
      setProfilePhoto,
      addWorkSample,
      removeWorkSample,
      submitArtistProfile,
      setArtistApproved,
    }),
    [
      artistProfileCompleted,
      artistApproved,
      artistDetails,
      aadhaarFiles,
      panFile,
      profilePhoto,
      workSamples,
    ],
  );

  return (
    <ArtistOnboardingContext.Provider value={value}>
      {children}
    </ArtistOnboardingContext.Provider>
  );
}

export function useArtistOnboarding() {
  const context = useContext(ArtistOnboardingContext);
  if (!context) {
    throw new Error(
      "useArtistOnboarding must be used within an ArtistOnboardingProvider",
    );
  }

  return context;
}
