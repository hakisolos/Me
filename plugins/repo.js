const util = require("util");
const fs = require("fs-extra");
const { cmd } = require("../lib/plugins");
const {
  formatp,
  TelegraPh,
  aitts,
  smd,
  prefix,
  runtime,
  Config,
  parsedJid,
  sleep,
  createUrl
} = require("../lib");
const axios = require("axios");
const fetch = require("node-fetch");
const os = require("os");
const speed = require("performance-now");

smd({
  pattern: "repo",
  alias: ["git", "sc", "script"],
  react: "📁",
  desc: "Sends info about repo",
  category: "general",
  filename: __filename
}, async _0x45da98 => {
  try {
    let {
      data: _0x44f98c
    } = await axios.get("https://github.com/hakisolos/Queen_Nikka");
    let _0x1c73f9 = ("\nQUEEN_NIKKA ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ, ᴍᴀᴅᴇ ʙʏ HAKI ᴀɴᴅ ᴅᴇᴘʟᴏʏᴇᴅ ʙʏ *" + Config.ownername + "*.\n\n  *❲🍀❳ Stars:* " + (_0x44f98c?.stargazers_count || "120+") + " stars\n  *❲🍀❳ Forks:* " + (_0x44f98c?.forks_count || "1000+") + " forks\n  *❲🍀❳ Authors:*HAKI\n [BASE=Star King]\n  *❲🍀❳ Created On:* " + (_0x44f98c?.created_at || "undefined") + "\n  *❲🍀❳ Repo:* _https://github.com/hakisolos/Queen_Nikka_\n **Made with love by Haki🥰, enjoy\n  *❲🍀❳ Scan:* _" + scan + "_" + (Config.caption ? "\n\n" + Config.caption : "")).trim();
    return await _0x45da98.sendUi(_0x45da98.jid, {
      caption: _0x1c73f9
    });
  } catch (_0x5816fe) {
    await _0x45da98.error(_0x5816fe + "\n\ncommand: repo", _0x5816fe);
  }
});
