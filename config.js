import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['56986511915', '𝑪𝒓𝒆𝒂𝒅𝒐𝒓/𝒂 🍯', true],
  ['59160267791', '𝑪𝒓𝒆𝒂𝒅𝒐𝒓/𝒂 🍯', true],
  ['59168683798', '𝑪𝒐𝒍𝒂𝒃 🍁', true],
] //Numeros de owner 

global.mods = [''] 
global.prems = ['56986511915', '59168683798']
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
global.packname = 'GAARABOT' 
global.author = '@xs.akiraa' 

//--info FG
global.botName = 'GaaraBot'
global.fgig = 'https://instagram.com/xs.akiraa' 
global.fgsc = 'https://github.com/AkiraaX2/GaaraBot' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.id_canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
global.bgp = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6'
global.bgp2 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O'
global.bgp3 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O' //--GP NSFW

global.wait = '🔥𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨....'
global.rwait = '⌛'
global.dmoji = '🍯'
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
