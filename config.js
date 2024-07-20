//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "94710628554";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtuM0tmeGZkL1FBbkZESmQ3dVJvY2FDRDBrZk9jWGVFYUttZ1ZidmhXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2ZUVHZDK2lrV1hENFRPU1pBN1hlN3VjK0lJL3lrZENEYnZhakZFaC9IQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSXZDYlNpc3ZHOHlYL1h4dHZkV05XeDRWZ2hySkRXY0w5ei9kOHJkVEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSTgrVUNRRzJXRjFFUmlpMkdqUWFLRTFzNmpLVVI3YVF2Qk1EOGoxQURrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNanRFQ1EzUjBUUG9aVlBnQjB4SWJLcUZqeWZkMVpoZXlvTjVuSzZ2WHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4OTRXUEpSbjVFejAxRzJBSUVrL0ZhbVhxWUZFNXBYRE9EcnB4aGhGVTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5xR3BXOTE3Z2dJeDdRczF0ZkJ5YnRHeENvT01xWEllYlB3Nkl1WXpuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnd6cEdzOTRhQmtBS05PTTluUDNsNFNDdjRCVTQ4N2J5emVqcUYveVVBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd3cmRFREdzZmw4ckZnSlcranNTQytyR0Q5dmdINzAxcjdmL2ZzQmE2dzdZWlZJdERLdkkzRW9QZStMNWVFVDhDRU5kSFgrNjI4NE9VYVpzdSs2b0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJycDl3c3IvMUVDakMxWE5JazIyL0FORmtQaU5WMFlZenBUVG5JeVRCWndFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIyMDc0MjgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlDNkFBNzgzNEZDREZCRjFERjUzRDRDRUJGMDg1QkQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0OTc5ODl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIyMDc0MjgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3NTRGRjRCOTJEODE2MTQ5NTc4RDgwMzY1REY2Q0U1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0OTc5ODl9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklRLVo5eGE1U2ZHYUpLY1ZrUDBGdmciLCJwaG9uZUlkIjoiZjBhMmExZmMtNjc5My00ODQ0LTk4MjMtYzZmNDVkZWE4NjQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0K0JDZE5TTTJuZjY4akliNVJLQXpTU0MvMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEc3Nab0lOdThTSFpEYjRyMFBZN1NobDRxYXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVzdONThBWFoiLCJtZSI6eyJpZCI6Ijk0NzIyMDc0MjgyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051dG42d0NFUGZ5NzdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNwWHFiZUVJd3hOZ0JtTkdML1FGZUJQUGM2RmpsVGpUZm5SNFJTN3FpUlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IityNEZDbFU0emJsM3UxU0UrelA2MGFlazBmTTVsV1ZTOFprUWRhcVloSG4yZlB3T2VzMEJJY3JocVBBSHY1d2pEcVEyUm9LZk9wQlhDU0Y5ZEdjcEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVKzRQVzdDK2hZZVR0TE1wMUlUZGIvWVpUUlpEeVZ4eCtmUHI1MGxQd1E2UlFiOGF4L3ZNWWlQc0xUL1VXKzVxYnduYUw0RUEvaGw0U3ZZUUcrcHFDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIyMDc0MjgyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYktWNm0zaENNTVRZQVpqUmkvMEJYZ1R6M09oWTVVNDAzNTBlRVV1Nm9rVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ5Nzk4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWWwifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "DUMIDU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
