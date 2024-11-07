export const getJwtExpiration = (jwtToken: string): number | null => {
  try {
    const parts = jwtToken.split(".");
    if (parts.length !== 3) {
      console.error(
        "Invalid JWT format: Expected three parts separated by dots."
      );
      return null;
    }

    const decodedPayload = Buffer.from(parts[1], "base64").toString();
    const payload = JSON.parse(decodedPayload);

    if (payload && typeof payload.exp === "number") {
      return payload.exp;
    } else {
      console.error(
        "Invalid JWT format: No expiration time (exp claim) found."
      );
      return null;
    }
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};
