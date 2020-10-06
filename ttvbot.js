var tmi = require('tmi.js');
var options = {
	options:{
		debug:true
	},
	connections:{
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "BotUserName",
		password: "oauth:"
	},channels:[
		"ChannelYouWantToRunBotOn"
	]
};

var channelname = "ChannelYouWantToRunBotOn";
function peenFunct(){
	min = Math.ceil(3);
	max = Math.floor(12);
	var size = Math.floor(Math.random()*(max-min))+min;
	return ' has a '+size+' incher!';
}

var client = new tmi.client(options);
client.connect();
client.on('connected', async function(address,port){
	client.say("channelname","Connected");
});
var fb = "facebook.com";
var yt = "youtube.com";
var ig = "instagram.com";
var tw = "twitter.com";
var sr = "overbuff.com";
client.on('message',(channel, tags, message, self) =>{
	if(self) return;
	if(message.toLowerCase() === '!penis'){
		client.say(channelname,`@${tags.username}`+peenFunct());
	}else if(message.toLowerCase() === '!socials'){
		client.say(channelname,"Socails: Facebook: "+fb+" YouTube: "+yt+" Instagram: "+ig+" Twitter: "+tw);
	}else if(message.toLowerCase() === '!sr'){
		client.say(channelname,sr);
	}else if(tags.mod===true && message.toLowerCase().substring(0,8)==='!editcom'){
		if(message.toLowerCase().substring(9,11)==='fb'){
			fb = message.toLowerCase().substring(12);
			client.say(channelname,"com has been updated");
		}else if(message.toLowerCase().substring(9,11)==='yt'){
			yt = message.toLowerCase().substring(12);
			client.say(channelname,"com has been updated");
		}else if(message.toLowerCase().substring(9,11)==='tw'){
			tw = message.toLowerCase().substring(12);
			client.say(channelname,"com has been updated");
		}else if(message.toLowerCase().substring(9,11)==='ig'){
			ig = message.toLowerCase().substring(12);
			client.say(channelname,"com has been updated");
		}else if(message.toLowerCase().substring(9,11)==='sr'){
			sr = message.toLowerCase().substring(12);
			client.say(channelname,"com has been updated");
		}
	}
});
