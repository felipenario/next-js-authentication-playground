import { getJwtExpiration } from "@/app/utils/getJwtExpiration";

export const isTokenCloseToExpire = (
  jwtToken: string,
  thresholdSeconds: number
) => {
  const expirationTime = getJwtExpiration(jwtToken);

  if (expirationTime !== null) {
    const expirationMilliseconds = expirationTime * 1000;
    const currentTime = Date.now();
    const timeRemaining = expirationMilliseconds - currentTime;

    const thresholdMilliseconds = thresholdSeconds * 1000;

    return timeRemaining <= thresholdMilliseconds;
  } else {
    return false;
  }
};
