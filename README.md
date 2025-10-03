# ⚠️ DISCONTINUED

## NestBOT-Framework
### Discord.JS small Framework for buildings bots

## Framework discontinued, awaiting for complete rebuild

#### Sample index file
```
const Discord = require('discord.js');
const client = new Discord.Client();

// Importing NestBOT framework
const NestBOT = require('nestbot');


// Import commands
    NestBOT.addCommand( 'Command code. Can be added as file by require' );


// Setting all needed configurations
    NestBOT.language( require('.JSON language file path') );
    NestBOT.config( require('.JSON config file path') );


// Initializing all NestBOT events
    NestBOT.init(client);


// Starting the bot
    NestBOT.login(client);
```


