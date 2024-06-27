// Creditos del codigo a @usxr_angelito //

/* GitHub: https://github.com/karim-off */

/* Bot: https://github.com/Karim-off/xiabot-pro */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `➤.˚✄ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n🌷 *${usuario}*\n» 𝗛𝗔𝗦 𝗖𝗔𝗠𝗕𝗜𝗔𝗗𝗢 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗔:\n\n» *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `➤.˚✄ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n🌷 *${usuario}* \n» 𝗛𝗔𝗦 𝗖𝗔𝗠𝗕𝗜𝗔𝗗𝗢 𝗘𝗟 𝗣𝗘𝗥𝗙𝗜𝗟 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `➤.˚✄ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n🌷 *${usuario}*\n» 𝗛𝗔𝗦 𝗖𝗔𝗠𝗕𝗜𝗔𝗗𝗢 𝗟𝗔 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢́𝗡 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝘼𝙃𝙊𝙍𝘼 *${m.messageStubParameters[0] == 'on' ? '𝗦𝗢𝗟𝗢 𝗔𝗗𝗠𝗜𝗡𝗦' : '𝗧𝗢𝗗𝗢𝗦'}* 𝗣𝗨𝗘𝗗𝗘 𝗘𝗗𝗜𝗧𝗔𝗥 𝗟𝗔 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `➤.˚✄\ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n🌷» 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗘𝗦𝗧𝗔́${m.messageStubParameters[0] == 'on' ? '𝗖𝗘𝗥𝗥𝗔𝗗𝗢 🍁' : '𝗔𝗕𝗜𝗘𝗥𝗧𝗢 🍁'}\n ${m.messageStubParameters[0] == 'on' ? '𝗦𝗢𝗟𝗢 𝗟𝗢𝗦 𝗔𝗗𝗠𝗜𝗡𝗦 𝗣𝗨𝗘𝗗𝗘𝗡 𝗛𝗔𝗕𝗟𝗔𝗥' : '𝗬𝗔 𝗣𝗨𝗘𝗗𝗘𝗦 𝗛𝗔𝗕𝗟𝗔𝗥'} 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `➤.˚✄\ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n🌷 *@${m.messageStubParameters[0].split`@`[0]}*\n » 𝗔𝗛𝗢𝗥𝗔 𝗘𝗥𝗘𝗦 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘 𝗘𝗦𝗧𝗘.:\n\n» 𝗚𝗥𝗨𝗣𝗢: ${groupName}\n\n» 𝗔𝗖𝗖𝗜𝗢́𝗡 𝗛𝗘𝗖𝗛𝗔 𝗣𝗢𝗥:\n🌷 *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `➤.˚✄\ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬𝗨𝗟𝗜𝗕𝗢𝗧 .˚✄\n\n 🌷 *@${m.messageStubParameters[0].split`@`[0]}*\n » 𝗗𝗘𝗝𝗔𝗦𝗧𝗘 𝗗𝗘 𝗦𝗘𝗥 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘 𝗘𝗦𝗧𝗘:\n\n» 𝙂𝙍𝙐𝙋𝙊: ${groupName}\n\n» 𝗔𝗖𝗖𝗜𝗢́𝗡 𝗛𝗘𝗖𝗛𝗔 𝗣𝗢𝗥:\n🌷 *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘾𝗔𝗠𝗕𝗜𝗔𝗦𝗧𝗘 𝗟𝗔 𝗗𝗨𝗥𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗟𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟𝗘𝗦 𝗔 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗦𝗧𝗘* 𝗟𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟𝗘𝗦.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}