export function storeAuthData(token) {
  try {
    localStorage.setItem("token", token);
  } catch (e) {
    // Local storage unavailable
  }
}

export function removeAuthData() {
  try {
    localStorage.removeItem("token");
  } catch (e) {
    // Local storage unavailable
  }
}

export function authHeader() {
  let token = "";
  try {
    token = localStorage.getItem("token");
  } catch (e) {
    // Local storage unavailable
  }

  let auth_header = `${token}`;

  if (token) {
    return auth_header;
  } else {
    return "";
  }
}

export function currentUserId() {
  try {
    return localStorage.getItem("userid");
  } catch (e) {
    return undefined;
  }
}
