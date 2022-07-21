switch (process.env.ENVIRONMENT) {
  case "development":
    return require("./development");
    break;
  case "production":
    return require("./development");
    break;
  default:
    return require("./development");
}
