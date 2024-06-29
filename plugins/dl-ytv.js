import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 100

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) return conn.reply(m.chat, `*🚩 𝘌𝘴𝘤𝘳𝘪𝘣𝘦 𝘭𝘢 𝘜𝘙𝘓 𝘥𝘦 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳.*`, m)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat,`Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'))
let q = args[1] || '360p'

await m.react('📀')
try {
const yt = await fg.ytv(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, {
        text: `🌷 *𝘛𝘪́𝘵𝘶𝘭𝘰 ∙* ${title}\n📀 *𝘛𝘢𝘮𝘢𝘯̃𝘰 ∙* ${size}\n\n*↻ 𝘌𝘴𝘱𝘦𝘳𝘢 @${m.sender.split`@`[0]},*`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n01:26 ━━━━●────── ${vid.timestamp}`, m)
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, dl_url } = yt
let vid = (await yts(text)).all[0]

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, {
        text: `🌷 *𝘛𝘪́𝘵𝘶𝘭𝘰 ∙* ${title}\n🍁 *𝘛𝘢𝘮𝘢𝘯̃𝘰 ∙* ${size}\n\n*↻ 𝘌𝘴𝘱𝘦𝘳𝘢 @${m.sender.split`@`[0]}, soy lenta. . .*`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
await m.react('✅')
} catch {
await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
//console.error(error)
}}}
handler.help = ['ytmp4 <url yt>']
handler.tags = ['downloader']
handler.command = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
handler.star = 2
handler.register = true 
export default handler