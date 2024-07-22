
let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `✳️ ${mssg.reply}`
    if (!m.quoted.fileSha256) throw `⚠️ ${mssg.reply}`
    if (!text) throw `✳️ 𝗙𝗮𝗹𝘁𝗮 𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ 𝗡𝗼 𝘁𝗶𝗲𝗻𝗲𝘀 𝗽𝗲𝗿𝗺𝗶𝘀𝗼 𝗽𝗮𝗿𝗮 𝗰𝗮𝗺𝗯𝗶𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗱𝗲 𝘀𝘁𝗶𝗰𝗸𝗲𝗿'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ ${mssg.cmdSave}`)
}


handler.help = ['setcmd <text>']
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.rowner = true

export default handler
