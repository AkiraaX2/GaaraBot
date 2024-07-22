const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('🔥') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `🍯 𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${pesan}\n🍯 𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨: _*${participants.length}*_`;
  let teks = `🐍𝗥𝗘𝗩𝗜𝗩𝗔𝗡 𝗣𝗟𝗔𝗡𝗧𝗔𝗦\n${oi}\n\n\n`;
  for (const mem of participants) {
    teks += `┣・🍯 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・🍯 𝗚𝗮𝗮𝗿𝗮-𝗕𝗼𝘁`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;