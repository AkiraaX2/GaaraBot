
import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];
        
         if (!chat.antiBotClone) {
            return
        }
        

        let botJid = global.conn.user.jid // JID del bot principal

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))
            
          if (isBotPresent) {
                setTimeout(async () => {
                    await m.reply(`✨ 𝘾𝙤𝙢𝙤 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 𝙚𝙨𝙩𝙖́ 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙢𝙚 𝙨𝙖𝙡𝙙𝙧𝙚́ 𝙥𝙖𝙧𝙖 𝙚𝙫𝙞𝙩𝙖𝙧 𝙚𝙡 𝙨𝙥𝙖𝙢.`, null, fwc)
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}
