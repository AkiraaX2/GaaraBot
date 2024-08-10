let handler = m => m
handler.all = async function (m) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD }}, "participant": "0@s.whatsapp.net" }

let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './src/mp3/hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}    

if (!chat.isBanned && chat.audios && m.text.match(/(te amo)) {
let vn = './src/mp3/te-amo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })} 

if (!chat.isBanned && chat.audios && m.text.match(/(bañate|Bañate|banate)/gi)) {    
let vn = './src/mp3/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })} 

if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias)/gi)) {    
let vn = './src/mp3/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}     

if (!chat.isBanned && chat.audios && m.text.match(/(diagnóstico|diagnóstico gay)/gi)) {    
let vn = './src/mp3/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}     

if (!chat.isBanned && chat.audios && m.text.match(/(elmo|elmoo|elmooo)/gi)) {    
let vn = './src/mp3/Elmo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(puto|es puto|el puto)/gi)) {    
let vn = './src/mp3/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(gemido|gimeme)/gi)) {    
let vn = './src/mp3/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(admin|adm)/gi)) {    
let vn = './src/mp3/admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(hentai|h)/gi)) {    
let vn = './src/mp3/hentai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(insultar)/gi)) {    
let vn = './src/mp3/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(traka|traka traka|Trakaa)/gi)) {    
let vn = './src/mp3/traka.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(pato)/gi)) {    
let vn = './src/mp3/pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(toma)/gi)) {    
let vn = './src/mp3/toma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(tio|oh tio)/gi)) {    
let vn = './src/mp3/oh_tio.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

if (!chat.isBanned && chat.audios && m.text.match(/(onichan)/gi)) {    
let vn = './src/mp3/onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}


return !0 }
handler.register = true
export default handler
