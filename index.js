const Canvas = require('canvas')
const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client()
const token = require('./token.js')

client.on('message', async message => {
  if (message.author.bot || message.content !== '!hat') return
  const canvas = Canvas.createCanvas(128, 128)
  const ctx = canvas.getContext('2d')
  const avatar = await Canvas.loadImage(message.author.displayAvatarURL({format: "png"}))
  ctx.drawImage(avatar, 0, 0, 128, 128)
  const hat = await Canvas.loadImage('santahat.png')
  ctx.drawImage(hat, 0, 0, 128, 78)
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hat.png')
  message.channel.send( attachment)
})



client.login(token)
