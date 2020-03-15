const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njg4Nzc3NjIxMjkwNDgzNzgw.Xm5QQA.MHi1a3pxqpVV6VlpfkDGNwlWooE';

Bot.on('ready', () =>{
    console.log('This bot is online!');
})

Bot.on("message", async message => {

    if(message.content === "POMOC") {
      console.log('POMOC: ' + message);
      message.reply('By wejść na jakiś kanał, kliknij go dwukrotnie!');
      message.reply('Kanał z glośnikiem to kanał na którym można rozmawiać, a zaś kanał z # jest to kanał tekstowy na którym można pisać');
      message.reply('Jednocześnie można być na kanale tekstowym, jak i zarówno głosowym.');
      message.reply('By ustawić sobie discorda wpisz USTAWIENIA, a żeby wejść na kanały szkolne wpisz RANGA tam masz opisaną całą procedure');
      message.reply('Jeżeli masz jakiś większy problem wpisz KONTAKT');
    }

    if(message.content === "RANGA") {
      console.log('RANGA: ' + message);
      message.reply('Zgłoś się do kogoś z administracji, by przejść weryfikacje i dostać range szkolną! Pod komendą KONTAKT masz dane kontaktowe do administacji');
    }

    if(message.content === "KONTAKT") {
      console.log('KONTAKT: ' + message);
      message.reply('Administacja: Pan Łukasz Matysek;woocash500#6902');
      message.reply('Administacja: Krystian Baraniecki;LiptonLeon#8949');
      message.reply('Administacja: Kuba Mielcarek;NibbaBuster#1029');
    }

    if(message.content === "USTAWIENIA") {
      console.log('USTAWIENIA: ' + message);
      message.reply('Grafike oraz inne załączniki można dodać plusem w lewym dolnym rogu na kanale tekstowym.');
      message.reply('Możesz sobie zmienić ustawienia mikrofonu w ustawieniach swojego discorda, NIE USTAWIENIACH SERWERA');
      message.reply('Klikając mikrofon w lewym dolnym rogu, wyciszasz sie/odciszasz, zaś klikająć słuchawki wyłączasz/włączasz całkowicie dźwięk');
    }

});

Bot.login(token);
