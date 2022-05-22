const Discord = require("discord.js");
const { re, mean } = require("mathjs");
const { measureMemory } = require("vm");

const Client = new Discord.Client;
 
const prefix = "!";
 
Client.on("ready", () => {
    console.log("MineBattle est en ligne");
    Client.user.setStatus("online");
    Client.user.setActivity("⛏  récuperer des minerais");
 
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
 
    //date
    if(message.content == prefix + "date"){
        message.reply("**Date du prochain MineBattle**: ??/??/2021");
    }
 
    //DATE
    if(message.content == prefix + "DATE"){
        message.reply("**Date du prochain MineBattle**: ??/??/2021");
    }

    //ip
    if(message.content == prefix + "ip"){
        message.reply("**L'ip du serveur MineBattle est strictement privé**: **XXXXXXXXXXXX**");
    }

    //IP
    if(message.content == prefix + "IP"){
        message.reply("**L'ip du serveur MineBattle est strictement privé**: **XXXXXXXXXXXX**");
    }

    //règle

    if(message.content == prefix + "REGLE"){
        message.reply("**__Veuillez attendre quelque seconde avant que toute les règles arrive __**")
        message.channel.send("Les règles sont les suivantes: ")
        message.channel.send("- Il faut cacher son coffre au début de partie afin de stocker les minerais sans être pillé --> les coffres comptent automatiquement les points ")
        message.channel.send("- Chaque minerai vaut un nombre de points précis ( Redstone: 1pt / Lapiz: 2pts / Fer: 3pts / Or: 5 pts / Diamant: 10 pts / émeraude: 15pts)")
        message.channel.send("- Il y a des minerais personnalisés de la couleur e chaque équipe ( Minerais perso: 10 pts / Minerais ennemis: 3 pts)")
        message.channel.send("- Il y aura un coffre qui va apparaître au hasard en haut de la tour avec du minerai dedans")
        message.channel.send("- Il y a aura un four en bas de la Tour qui dupliquera les minerais mais qui prendra un peu plus de temps à les fondre")
        message.channel.send("- Il y a une table d'enchant qui, au cours de la partie, s'améliorera automatiquement")
        message.channel.send("- Une partie dure 1 heure et au bout de ce temps, l'équipe avec le plus de points comptabilisés sera déclarée vainqueur !")
        message.channel.send("`Infos complèmentaires `")
        message.channel.send(" Les Minerais personnels de votre couleurs valent double")
    }
 
    //REGLE

    if(message.content == prefix + "REGLE"){
        message.reply("**__Veuillez attendre quelque seconde avant que toute les règles arrive __**")
        message.channel.send("Les règles sont les suivantes: ")
        message.channel.send("- Il faut cacher son coffre au début de partie afin de stocker les minerais sans être pillé --> les coffres comptent automatiquement les points ")
        message.channel.send("- Chaque minerai vaut un nombre de points précis ( Redstone: 1pt / Lapiz: 2pts / Fer: 3pts / Or: 5 pts / Diamant: 10 pts / émeraude: 15pts)")
        message.channel.send("- Il y a des minerais personnalisés de la couleur e chaque équipe ( Minerais perso: 10 pts / Minerais ennemis: 3 pts)")
        message.channel.send("- Il y aura un coffre qui va apparaître au hasard en haut de la tour avec du minerai dedans")
        message.channel.send("- Il y a aura un four en bas de la Tour qui dupliquera les minerais mais qui prendra un peu plus de temps à les fondre")
        message.channel.send("- Il y a une table d'enchant qui, au cours de la partie, s'améliorera automatiquement")
        message.channel.send("- Une partie dure 1 heure et au bout de ce temps, l'équipe avec le plus de points comptabilisés sera déclarée vainqueur !")
        message.channel.send("`Infos complèmentaires `")
        message.channel.send(" Les Minerais personnels de votre couleurs valent double")
    }

    //participant

    if(message.content == prefix + "participant"){
        message.reply("Voici la chaîne de chacun des streameurs pour que vous puissiez checker par vous même ! ^^ https://www.twitch.tv/leitolivehttps://www.twitch.tv/alexcrilo https://www.twitch.tv/poyel_ https://www.twitch.tv/aikulive https://www.twitch.tv/osmoond_ https://www.twitch.tv/martizo_ https://www.twitch.tv/kylosss_ https://www.twitch.tv/kroonz https://www.twitch.tv/fixel_ https://www.twitch.tv/paquitooh https://www.twitch.tv/alexbaldtv https://www.twitch.tv/abiliotw")
    }

    //ban
 
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
 
            if(mention == undefined){
                message.reply("Membre non ou mal définie");
            }
            else { 
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succès");
                }
                else {
                    message.reply("Imposible de bannir ce membre");
                }
            }
        }
    }
 
    //kick    
 
    if(message.member.hasPermission("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();
 
            if(mention == undefined){
                message.reply("Membre non ou mal définie");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succès");
                }
                else {
                    message.reply("Imposible de kick ce membre");
                }
            }
    }
    }
 
     //mute
 
     if(message.member.hasPermission("ADMINISTRATOR")){
     if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();
 
            if(mention == undefined){
                message.reply("Membre nom ou mal définie");
            }
            else {
                 mention.roles.add("828920267035115540");
                 message.reply(mention.displayName + " a été mute avec succès");
                 }
 
            }
        }
 
    //unmute
 
    if(message.member.hasPermission("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "unmute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Membre nom ou mal définie");
        }
        else {
             mention.roles.remove("828920267035115540");
             message.reply(mention.displayName + " a été unmute avec succès");
             }

        }
    }
 
    //createur
 
    if(message.content == prefix + "createur"){
        message.reply("Le bot discord **MineBattle** a été developpé par **Dinawo#8866** avec ❣ ");
    }
 
 
 
     //Ticket (Non fonctionnel )
     
     Client.on("messageReactionAdd", async(reaction, user) => {
      const message = reaction.message
      const member = message.guild.members.cache.get(user.id)

      if (user.partial) await user.fetch();
      if (reaction.partial) await reaction.fetch()
      if(user.bot) return;

      if(["⚙️", "🔒"].includes(reaction.emoji.name)) { 
      switch(reaction.emoji.name) {

        case "⚙️":
          reaction.users.remove(user);

          let username = user.username;
          let channel = await message.guild.channels.create(`ticket-${username}`, {type: 'text'})
          .cache(err => {
            message.channel.send(":x: Une erreur est survenue ! `messageReactionAdd`")
          });

          channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false});
          channel.updateOverwrite(member, {
            'VIEW_CHANNEL': true,
            'SEND_MESSAGES': true,
            'ADD_REACRIONS': true
          })
          channel.updateOverwrite(message.guild.roles.cache.find(role => role.name == "admin"), {'VIEW_CHANNEL': true})
          .cache(err => {
            console.log(err)
          });

          let ticketInChannel = new Discord.MessageEmbed()
          .setTitle('**__Nouveau ticket__**')
          .setDescription("Appuiyer sur la réaction pour fermer le ticket.🔒")
          .setColor('#000cff')

          channel.send(`Bonjour ${member} expliquez nous votre problèmes  ! `)

          channel.send(ticketInChannel).then(msg => msg.react('🔒'))
        break;
        
        case "🔒":
         
          if(!message.channel.name.startsWith('ticket-')) return;
          if(!member.hasPermission('ADMINISTRATOR')) return;

          message.channel.delete()
          break;
      }
  }    
     });

})})

//invitation


    //miseajour
    




  //suggestion (désactiver temporairement)

  Client.on("message", async message => {
      if(message.content.startsWith("!sug")){
          message.delete()
          let msg = message.content.slice(4)
          if(!msg) return message.reply("msg")

          let embed = new Discord.MessageEmbed()
          .addField("Nouvelle suggestion de " +message.author.username, msg)
          let msgcreation = await message.channel.send(embed)

          await msgcreation.react("🟢")
          await msgcreation.react("🔵")
          await msgcreation.react("🔴")

      }
  
  //levels (futur ajout)

  

  //help 
    if(message.content === prefix + "help"){

        var user = message.author;

        var embed = new Discord.MessageEmbed()
            .setColor("#6ddccf")
            .setTitle(`MineBattle Commands `)
            .addField("**__Commands accès à tous le monde__**", "*Aucun perms exigé*", true)
            .addField("**!regle**:", "Vous permet d'avoir toute les règles du jeu. *Veuillez attendre quelque seconde pour avoir toute les règles, la dèrnière ligne commence par: Les Minerais*", false )
            .addField("**!participant**:", "Vous permet d'avoir tout les participants avec le lien de leur chaine Twitch du jeu MineBattle", false)
            .addField("**!createur**:", "Vous permet de connaitre le crétateur du bot discord **MineBattle**", false)
            .addField("**!date**:", "Vous permet de connaitre la date d'un prochain MineBattle", false)
            .addField("**!ip**:", "Vous permet de connaitre l'ip du serveur MineBattle (/!\ Cette ip est strictement privé /!\ ", false)
            .addField("**__Commands accès aux admins__**", "*Perms ADMIN obbligatoire*", false)
            .addField("**!kick**:", "Vous permet de kick un membre", false)
            .addField("**!ban**:", "Vous permet de ban un membre", false)
            .addField("© 2021 MineBattle", "Tout droit réservé", false)


            message.channel.send(embed)
    }

});














































































Client.login("VOTRE TOKEN")
