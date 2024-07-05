import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Check if online
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("Inside online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("Inside offline");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
