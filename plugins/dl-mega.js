//código adaptado por GitHub: @karim-off
import { File } from "megajs";
import path from "path";

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`➤.˚✄\
 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡! .˚✄\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: *${usedPrefix + command}* <link>`);

        const file = File.fromURL(text);
        await file.loadAttributes();

        if (file.size >= 300000000) return m.reply('Error: El archivo es grande (Maximo tamaño: 300MB)');

        const downloadingMessage = `𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼... 🍁`;
        m.reply(downloadingMessage);

        const caption = `🍁 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲́𝘅𝗶𝘁𝗼....\n\n» 𝗡𝗼𝗺𝗯𝗿𝗲: ${file.name}\n» 𝗣𝗲𝘀𝗼: ${formatBytes(file.size)}\n» 𝙁𝙚𝙘𝙝𝙖: ${fecha}`;

        const data = await file.downloadBuffer();

        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };

        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";

        await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true });

    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}