import { EncryptedToken } from "../../utils/Encrypted/encryptedCookie";


export default function profileHandler(req:any, res:any) {
  const { token } = req.cookies;
  
  if (!token) {
    return res.status(401).json({ error: "Not logged in" });
  }
  let textDesEncrypted = EncryptedToken.desencryptedToken(token);
  
  return res.status(200).json({ token:textDesEncrypted });
}