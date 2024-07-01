const { Client, GatewayIntentBits } = require('discord.js');

// Bot token'ınızı buraya yazın
const TOKEN = process.env.token ;

// Yeni bir Discord istemcisi oluştur
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot hazır olduğunda çalışacak kod
client.once('ready', () => {
  console.log(`Giriş yapıldı: ${client.user.tag}`);
});

// Mesaj alındığında çalışacak kod
client.on('messageCreate', message => {
  // Bot'un kendisinin mesajlarına cevap vermesini engelle
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

// Bot'u giriş yap
client.login(TOKEN);
