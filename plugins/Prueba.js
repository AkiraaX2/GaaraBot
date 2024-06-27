let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*𝐘𝐚 𝐄𝐬 𝐀𝐝𝐦𝐢𝐧 𝐃𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐌𝐢 𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐚*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^dameadmin|tenerpoder$/i
handler.rowner = true
handler.botAdmin = true
export default handler