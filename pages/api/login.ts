import * as cookie from "cookie";
import { EncryptedToken } from "../../utils/Encrypted/encryptedCookie";

export default async (req: any, res: any) => {
  let textEncrypted = EncryptedToken.encryptedToken(req.body.token);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", textEncrypted , {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );

  //let variable = await EncryptedToken.encryptedToken(req.body.token);
  //console.log(await EncryptedToken.desencryptedToken(variable))
  res.statusCode = 200;
  res.json({ success: 'cookie apply' });
};
