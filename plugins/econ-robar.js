const ro = 30;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏰¡𝗛𝗲𝘆! 𝗘𝘀𝗽𝗲𝗿𝗮 ${msToTime(time - new Date())} 𝗽𝗮𝗿𝗮 𝘃𝗼𝗹𝘃𝗲𝗿 𝗮 𝗿𝗼𝗯𝗮𝗿*`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*[❗] 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮 𝗮 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝗽𝗮𝗿𝗮 𝗿𝗼𝗯𝗮𝗿.*`;
  if (!(who in global.db.data.users)) throw `*[❗] 𝗘𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗻𝗼 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗺𝗶 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗱𝗮𝘁𝗼𝘀.*`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.coin < rob) return m.reply(`😞 @${who.split`@`[0]} 𝗧𝗶𝗲𝗻𝗲𝘀 𝗺𝗲𝗻𝗼𝘀 𝗱𝗲${ro} xp*\n𝗡𝗼 𝗿𝗼𝗯𝗲𝘀 𝗮 𝘂𝗻 𝗽𝗼𝗯𝗿𝗲, 𝗻𝗼 𝘀𝗲𝗮𝘀 𝗮𝘀𝗶 :´v`, null, {mentions: [who]});
  global.db.data.users[m.sender].coin += rob;
  global.db.data.users[who].coin -= rob;
  m.reply(`*‣ 𝗤𝘂𝗲 𝗯𝘂𝗲𝗻𝗮 𝗿𝗮𝘁𝗮 𝘀𝗼𝘀, 𝗥𝗼𝗯𝗮𝘀𝘁𝗲 ${rob} 𝗫𝗣 𝗮 @${who.split`@`[0]}*`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
handler.register = true
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}