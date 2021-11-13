import { projectAuth } from "../firebase/config";

export default async function isUserPremium() {
  var _a, _b, _c;
  await ((_a = projectAuth.currentUser) === null || _a === void 0
    ? void 0
    : _a.getIdToken(true));
  const decodedToken = await ((_b = projectAuth.currentUser) === null ||
  _b === void 0
    ? void 0
    : _b.getIdTokenResult());
  return (
    (_c =
      decodedToken === null || decodedToken === void 0
        ? void 0
        : decodedToken.claims) === null || _c === void 0
      ? void 0
      : _c.stripeRole
  )
    ? true
    : false;
}
