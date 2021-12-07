function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '916235199845', 'wͥᴀvᴇsoͭɴᴀιʀᷤ ⫹нᷟмͤ⫺✩', m)
  this.sendContact(m.chat, '916235199845', 'wͥᴀvᴇsoͭɴᴀιʀᷤ ⫹нᷟмͤ⫺✩', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
