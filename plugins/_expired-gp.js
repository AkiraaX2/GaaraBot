
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `👋 𝐀𝐝𝐢𝐨́𝐬 𝐏𝐥𝐚𝐧𝐭𝐚𝐬  *${this.user.name}* saldrá del grupo \n\nfinalizo su alquiler`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
