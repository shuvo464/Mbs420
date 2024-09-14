const fs = require("fs");
module.exports = {
  config:{
	name: "Joy5",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🌺")==0 || body.indexOf("🍁")==0 || body.indexOf("🌷")==0) {
		var msg = {
				body: "┼🩵🪽─┼༊༎থাইকা༊༎𝙹𝚊𝚢𝚎𝚘༊༎প্লিজ༊༎𝚃𝚘𝚖𝚒\n༊༎আমার༊༎গল্পের༊༎শেষ༊༎পাতায়༊༎-3<🦋🔐 ┼🩵🪽─┼\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/joysad.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
