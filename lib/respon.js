exports.onlyGroup = (pushname) => {
  return `*Maaf ${pushname} Perintah ini hanya dapat digunakan di group*`;
};
exports.onlyAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh admin group*`;
};
exports.botAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan ketika saya menjadi admin*`;
};
exports.notText = (prefix, cmd, pushname) => {
   return `*Maaf ${pushname}*\n\n_Parameter text belum dimasukan_\n\nex: ${prefix + cmd} yourtext `;
};
exports.nourl = () => {
   return `*silahkan masukkan url`;
};
exports.ownerbot = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh owner*`;
};
exports.onlyprem = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh user premium*`;
};