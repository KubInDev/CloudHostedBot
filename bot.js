const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'Njg1NTMyMzc1Mjk5MzkxNjMy.Xm0zhQ.zn2GVWk-jX2yPGrOPZeiwASJ0Z8';
client.login(token);

client.on("ready", () => {
  console.log(`Bot has started`);
});


client.on("message", async message => {

    if(message.content === "POMOC") {
      message.reply('Pomóc do muzyki: p!help');
      message.reply('By wejść na jakiś kanał, kliknij go dwukrotnie!');
      message.reply('Kanał z glośnikiem to kanał na którym można rozmawiać, a zaś kanał z # jest to kanał tekstowy na którym można pisać');
      message.reply('Jednocześnie można być na kanale tekstowym, jak i zarówno głosowym.');
      message.reply('Grafike oraz inne załączniki można dodać plusem w lewym dolnym rogu na kanale tekstowym.');
      message.reply('Discord na początku ma ustawioną aktywacje głosową, możecie to sobie zmienić w ustawieniach Discorda, NIE SERWERA');
      message.reply('Jeżeli masz jakiś większy problem wpisz KONTAKT');
    }

    if(message.content === "RANGA") {
      message.reply('Zgłoś się do kogoś z administracji, by przejść weryfikacje i dostać range szkolną!')
    }

    if(message.content === "KONTAKT") {
      message.reply('Administacja: Pan Łukasz Matysek;woocash500#6902')
      message.reply('Administacja: Krystian Baraniecki;LiptonLeon#8949')
      message.reply('Administacja: Kuba Mielcarek;NibbaBuster#1029')
    }

});
