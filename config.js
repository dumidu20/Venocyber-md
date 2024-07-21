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
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1uTXBJS2RJbGxhZGtDVUZaYlJwTCticVEzWWlkdy9Ydjh3dG15WHgyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0UycHluc3FJY3MvdXk1QkxsRVNmSEhZUHA0TjRQb0NUWjZ5TmxvQ0VWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSDJqbmd2MmIzTW5sbEx5T3ltNlBZamxXNVBQMGlzY3NjQWgvM0gxZ1ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSitGZHhXTUJIc0JBWHFzUkJiUjFzTFhWSjJydXBMaVlqaXp3Y2JqQkRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNb2dObGd4Z1RDT3NDTDVKWG1HOGcvRW56eUFmQ2JqandDb0VYNUVha0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4Z2R0QU5FejZLc25NNEtUc3pqcE1ncVgrazNLa3FKWFFkbHh4TkJNd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUkvVmkyOXdNWXUxeGc2QkF1bWhCZmorNkZxcUEza1pMUXJETTEwZ1BHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamRYa0RZLzBHVDJtRUVlVTlqZmd0aDVKR1ZDaGp4eFI1cHcyalZZVWh6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIvaHNYUmlzNnkwbDlnWmNKN2JiZnNGeWVaRFY2a3UxV1NGZ1BaQXppN0IxZ05Zb3V2TWcvY2xGbTU4TlVaczFrdHVwRCtJdTNpS3ZTR3VhMnhLSmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IlVGRUpTZEhZdWhkaVFRcVE0WmhUZ09Ja25LTmY1MnhtQUR2QlBhZ2wxOVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTZCODE0QTQwQzc3OTI1MjlEOEYzNUJGRkY5MDMzMDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTUyNjM5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUU4RTNDQTI3MUZCOUMyRkFCRTgyMEE2NURGNjk4RkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTUyNjM5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDkyNzIyRTIyOEQwQzI0RDlFNjREQUYwNUMwNDI2NjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTUyNjM5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDdDNkE1MjlFNkJCMTJGNDFEQUUzNEFERTNDOEQyMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTUyNjM5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYVRJWUJoY1pSSS05WkJ4VkRJNjBtUSIsInBob25lSWQiOiIxOGQ5NzJlNC1mNjVhLTQzOTUtYjU2Ni1kN2U5NDVlZDg1NTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOCtMSXE5R1pDVXR0MTFBeTNFTUxONmxIV0hzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpvWkkzLzBVeGFSWThRUUZEaXVFT1Qxd0thdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQVlI0MVRDRCIsIm1lIjp7ImlkIjoiOTQ3NjI0MzA5MzM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIaWkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kvWDYrRUVFT3JROGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZRMnNlQno0SE9LRHNlaVJQWWdmcTB1WlczZVBia3pRVjVIRTF5ZW9JRkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im8xZXpHZTQrQXNaTVdvVnhteHB6ZFdxMWIwckVaUzBDbjhyN1BvUlRUTnBxazRhaVlyWTVxVFhCWit1QWZGcVZkUURwNzJIcnYyeldmc1habzNTSkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKRWtqcnNYS3V4M2JCS3dla3ltTER3VXU4c1BPOEdmOGxSaldJT3lDQ0QyWXZoY1p2eFVjWEt1cVVKRWhjS0FUdWNDMkQ0Uk9xOXlYMnlBNGtwZ3VpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyNDMwOTMzOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDBOckhnYytCemlnN0hva1QySUg2dExtVnQzajI1TTBGZVJ4TmNucUNCUSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTUyNjM5MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEYmIifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DUMIDU-BOT",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
