export default interface IEnvironment {
  //config
  port: number;
  // MongoDB
  mongodb_uri: string;
  // MongoDB Database
  usersDB: string;
  // JWT
  // Cookie
  cookie_secret: string;
  cookie_expiry: number;
}
