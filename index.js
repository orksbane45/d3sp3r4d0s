	const Discord = require('discord.js');

	const client = new Discord.Client();

	var prefix = "=";

	client.login(process.env.);

	client.on("ready", () => {
		console.log("Bot connected");
		client.user.setGame("faire des CDI");
    });
    
    client.on('message', message => {

        if(message.content === prefix + "Hey"){
            message.reply("mon coeur d'amour");
            console.log('D3SP3R4D0S reply to a player');
        }

        if(message.content === prefix + "aide"){
            var help_embed = new Discord.RichEmbed()
            .setTitle("Vous avez ouvert mon menu d'aide")
            .setThumbnail(message.guild.avatarURL) //Mettre message.author.avatarURL si ça marche pas
            .setDescription("Tout d'abord sachez que je suis un bot de Modération!")
            .setColor("#69ea38")
            .addField("=aide", "Affiche ce panel avec toutes les commandes disponibles")
            .addField("=Hey", "Je te répondrai de manière très romantique")
            .addField("=statistiques", "Vous saurez davantage de chose sur vous après !")
            .addField("=info", "Vous donne tout ce que vous devez savoir sur le serveur et moi")
            .setFooter("Ce bot a été créé par iFKilleur#8181")
            message.channel.sendMessage(help_embed);
            console.log("Un utilisateur a effectué la commande d'aide")
        }

        if(message.content === prefix + "info") {
            var info_embed = new Discord.RichEmbed()
            .setColor(b7fc00)
            .setTitle("Tu verras ici toutes les informations liées au serveur et à toi !")
            .addField(":robot: Nom :", `${client.user.tag}`, true)
            .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
            .addField(":id:", `${client.user.id}`)
            .addField("Nombre de membres", message.guild.members.size)
            .addField("Nombre de catégorie et de salons", message.guild.channels.size)
            .setFooter("Ce bot a été créé par iFKilleur#8181")
            message.channel.sendMessage(info_embed)
            console.log("Un utilisateur a fait la commande d'information")
        }
        
        if (!message.content.startsWith(prefix)) return;

        var args = message.content.substring(prefix.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "statistiques":

            var userCreateDate = message.author.createdAt.toString().split(" ");
            var msgauthor = message.author.id;

            var stats_embed = new Discord.RichEmbed()
            .setTitle(`Statistique de l'utilisateur : ${message.author.username}`)
            .setColor("#b7fc00")
            .addField(`ID de l'utilisateur :id:`, msgauthor, true)
            .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
            .setThumbnail(message.author.avatarURL)
            .setFooter("Ce bot a été créé par iFKilleur#8181")
            message.reply("Tu viens de recevoir tes statistiques en privé !")
            message.author.send({embed: stats_embed});
            console.log("Un utilisateur a fait la commande de statistiques")
            break;
        }
    }); 
