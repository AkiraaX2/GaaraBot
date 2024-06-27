import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['56964886274', '𝑶𝒘𝒏𝒆𝒓 🌹', true],
  ['56945843173', '𝑪𝒓𝒆𝒂𝒅𝒐𝒓𝒂 🌷', true],
  ['59168683798', '𝑪𝒐𝒍𝒂𝒃 🍁', true],
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5493536568522', '5493536568522']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝙔𝙪𝙡𝙞𝘽𝙤𝙩' 
global.author = '@edits.yuli' 

//--info FG
global.botName = '𝙔𝙪𝙡𝙞𝘽𝙤𝙩'
global.fgig = 'https://instagram.com/edits.yuli' 
global.fgsc = 'https://github.com/karim-off/GenesisBot-Pro' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.id_canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
global.bgp = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6'
global.bgp2 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O'
global.bgp3 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O' //--GP NSFW

global.wait = '🐒𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨....'
global.rwait = '⌛'
global.dmoji = '🌷'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
