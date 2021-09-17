import jwtDecode from "jwt-decode";

export function decodeToken(token) {
  const decoded = jwtDecode(token);
  return decoded;
}

export default decodeToken;
