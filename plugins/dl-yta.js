import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) conn.reply(m.chat, `*🚩 𝘌𝘴𝘤𝘳𝘪𝘣𝘦 𝘭𝘢 𝘜𝘙𝘓 𝘥𝘦 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳.*`,  m, fake,)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'))
let q = '128kbps'

await m.react('🍁')
try {
const yt = await fg.yta(args[0])
let { title, dl_url, size } = yt
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, {
        text: `  🌷 *𝘛𝘪́𝘵𝘶𝘭𝘰 :* ${title}\n\n💿 *𝘛𝘢𝘮𝘢𝘯̃𝘰 :* ${size}\n\n*↻ 𝘌𝘴𝘱𝘦𝘳𝘢 @${m.sender.split`@`[0]},* .`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(args[0])
let { title, size, dl_url } = yt
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))

await conn.sendMessage(m.chat, {
        text: `  🍭 *𝘛𝘪́𝘵𝘶𝘭𝘰 ∙* ${title}\n\n⚖️ *𝘛𝘢𝘮𝘢𝘯̃𝘰 ∙* ${size}\n\n*↻ 𝘌𝘴𝘱𝘦𝘳𝘢 @${m.sender.split`@`[0]}, 𝘴𝘰𝘺 𝘭𝘦𝘯𝘵𝘢. . .* .`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
await m.react('✅')
} catch {
await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`,  m, fake,).then(_ => m.react('✖️'))
console.error(error)
}}}
handler.help = ['ytmp3 <url yt>']
handler.tags = ['downloader']
handler.command = /^(fgmp3|dlmp3|getaud|yt(a|mp3))$/i
handler.star = 2
handler.register = true 
export default handler