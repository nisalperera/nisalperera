export const REACT_APP_DEV = process.env.REACT_APP_DEV === "true" || false;
export const REACT_APP_DEV_URL = process.env.REACT_APP_DEV_URL || "http://localhost:3000";
export const REACT_APP_BASE_URL = REACT_APP_DEV ? `${REACT_APP_DEV_URL}/` : "https://nisalperera.github.io/nisalperera/";
