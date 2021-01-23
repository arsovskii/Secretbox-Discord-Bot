const Discord = require('discord.js');
const http = require('http');
const express = require('express');
const app = express();

const client = new Discord.Client();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



var messagesNumber = 0;


const Embed = new Discord.MessageEmbed()
	.setColor('#724E99')
	.setTitle('Secretbox')
	.setURL('https://secretboxonline.herokuapp.com/static/index.html')
	.setAuthor('Secretbox Organisation', 'https://imgur.com/a/Qw2Rzwr', 'https://secretboxonline.herokuapp.com/static/index.html')
	.setDescription('s̶͖͐̀̂̒̎͂̿̊͒͐̈́͐̀̆̄̄̄́̉͘̕o̸̢̡̻̪̞̪̞̩̠͉̹̤̘̓̾͐̏͂̇̓̚̕̕͠l̷̨̳̹͍͖̠̠̖̠̮͇͈̩͍̳͖̘̼̱͙̽͌̒͑̏̎͂͑̓́͒̌́̈́͌͘͘͠͝͝v̴̨̧̛̯̮̝̟͍͉̲̥̗̔̂͋̄͂̅̇̇͌͆̊̽́̀̈́̈́̃̿̏̽̂̆͘ȩ̵̛̙̹̱̲̙͇̺̙͙͖̭͈̬̞͖͈̫̖͍̯̥̮̙̦̬̈̾̏͜͠͠ͅ ̶̯͎̰̹̬̰̘̦͇͔͙̤̤͕̳͚͚̝̜̍̈́̿́̈́̉̋̂͊́͜͠ū̷̹̖̼̬̗̜̦͕͐̌́͊̽̿̋̽̃͒̒̎̂̓̏̀͂͂̉͘̕s̴̡̨̖͍͎̝͍͔̭̜͍͕̮̬͖̺̞͓̲͚͍̤̝̙̀̃̓̌͌̓͑͊͒̑͘͘͠͠͝ͅ')
	.setThumbnail('https://media.discordapp.net/attachments/705559014984908800/705574411658461205/secretbox_icon.jpg')

	
	.setTimestamp()
	.setFooter('The Secretbox Organisation ©2002', 'https://media.discordapp.net/attachments/705559014984908800/705574411658461205/secretbox_icon.jpg');


client.on('ready', () => {
    client.user.setStatus('invisible');
	console.log('Bot Started');
	//var channel = client.channels.find('id', '');
    
})
const prefix = '!';
var messageStack = [];
var AdminMessageStack = [];
var hasHappened = false
client.on('message', message => {
	

	if(message.guild.name == "ghetto server")
	{
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).split(' ');
		const command = args.shift().toLowerCase();
		AdminMessageStack.push(command);
		
	}else if(AdminMessageStack>0){
		message.channel.send(AdminMessageStack.pop());
	}

	messagesNumber++;
	messageStack.push(message.content);
	console.log(messageStack);
    //if (message.content === 'ako'){
	console.log(messagesNumber);
	if(messagesNumber % 30 == 0){
		setTimeout(() => {
			message.channel.send(messageStack[3]);
			messageStack = [];
		}, 3000);
	}
	
	if(messagesNumber > 100  || message.content == "vilipceK" || message.content == "admin"){
		
		message.channel.send(messageStack[15])/*.then(sentEmbed => {
			sentEmbed.react("🇸");
			sentEmbed.react("🦠");
			sentEmbed.react("🗓");
			sentEmbed.react("📊");
			sentEmbed.react("📙");
			sentEmbed.react("💯");
			sentEmbed.react("🎂");
			sentEmbed.react("😂");
			sentEmbed.react("👍");
			sentEmbed.react("🤑");
			sentEmbed.react("😒");
			sentEmbed.react("🤢");
			sentEmbed.react("🥶");
			sentEmbed.react("🤯");
			sentEmbed.react("🤠");
			sentEmbed.react("😈");
			sentEmbed.react("🤏");
			sentEmbed.react("👊");
			sentEmbed.react("🤲");
			sentEmbed.react("🧠");
		});*/
        hasHappened = true;
		messagesNumber = 0;
	}
	if(message.content == "the facts"){
		message.channel.send(Embed);
		message.channel.send('https://cdn.discordapp.com/attachments/705559014984908800/705743768816713768/S.mp4');
	}
})




client.login('NzA1NTMxNzM0MTgzMjQ3OTIz.XqtbBw.ij9Jc4r_XMXAVuTfOHQKHviZcsY');