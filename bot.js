const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'Njg1NTMyMzc1Mjk5MzkxNjMy.Xm0zhQ.zn2GVWk-jX2yPGrOPZeiwASJ0Z8';

client.on("ready", () => {
  console.log(`Bot has started`);
});


client.on("message", async message => {

    if(message.content === "POMOC") {
      message.reply('Pomóc do muzyki: p!help');
      message.reply('By wejść na jakiś kanał, kliknij go dwukrotnie!');
      message.reply('Dozwolone jest tylko jedno konto! By przeczytać reszte wejdź na kanał regulamin!');
      message.reply('Kanał z glośnikiem to kanał na którym można rozmawiać, a zaś kanał z # jest to kanał tekstowy na którym można pisać');
      message.reply('Jednocześnie można być na kanale tekstowym, jak i zarówno głosowym.');
      message.reply('Grafike oraz inne załączniki można dodać plusem w lewym dolnym rogu na kanale tekstowym.');
      message.reply('Discord na początku ma ustawioną aktywacje głosową, możecie to sobie zmienić w ustawieniach Discorda, NIE SERWERA');
      message.reply('Jeżeli masz jakiś większy problem kieruj się do administracji!');
    }

});

client.login(token); 