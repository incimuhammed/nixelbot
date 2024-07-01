const { SlashCommandBuilder } = require('discord.js');
const os = require('os');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('istatistikler')
    .setDescription('Botun istatistiklerini gösterir'),
  async execute(interaction) {
    const { client } = interaction;

    // Botun çalışma süresi
    const uptime = process.uptime();
    const gün = Math.floor(uptime / (60 * 60 * 24));
    const saat = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
    const dakika = Math.floor((uptime % (60 * 60)) / 60);
    const saniye = Math.floor(uptime % 60);

    // Bot istatistikleri
    const sunucuSayısı = client.guilds.cache.size;
    const kullanıcıSayısı = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
    const botGecikmesi = Math.round(client.ws.ping);
    const bellekKullanımı = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    await interaction.reply(`Bot İstatistikleri:
    \n**Çalışma Süresi:** ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye
    \n**Sunucu Sayısı:** ${sunucuSayısı}
    \n**Kullanıcı Sayısı:** ${kullanıcıSayısı}
    \n**Bot Gecikmesi:** ${botGecikmesi}ms
    \n**Bellek Kullanımı:** ${bellekKullanımı} MB
    \n**Platform:** ${os.platform()} ${os.arch()}
    \n**Node Sürümü:** ${process.version}`);
  },
};
