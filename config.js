//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.botname = '𝚂𝚈𝙽𝚃𝙰𝚇 -𝙼𝙳' 
global.ownername = '𝚁𝚢𝚞𝚞𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝚕'
global.owner = ['6281227374317']
global.premium = ['6281227374317']
global.packname = 'Sticker By' 
global.author = 'Ryuu' 
global.sessionName = 'session'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: '𝚂𝚞𝚌𝚌𝚎𝚜  𝙼𝚊𝚣𝚜𝚎𝚑𝚑𝚑𝚑𝚑',
    error: '𝙴𝚛𝚛𝚘𝚛 𝚖𝚊𝚣𝚣𝚜𝚎𝚑,  𝚈𝚊𝚗𝚐 𝚜𝚊𝚋𝚊𝚛 𝚢𝚊𝚊𝚊',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝚂𝚊𝚋𝚊𝚛 𝚖𝚊𝚣𝚜𝚎𝚑, 𝚘𝚛𝚊𝚗𝚐 𝚜𝚊𝚋𝚊𝚛 𝚍𝚒𝚜𝚊𝚢𝚊𝚗𝚐 𝚓𝚊𝚗𝚍𝚊𝚑𝚑',
    done: '𝚂𝚞𝚌𝚌𝚎𝚜 𝙼𝚊𝚣𝚣𝚜𝚎𝚑 ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/desti.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
