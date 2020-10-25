const sampleCommand = {
    
    "properties": {
        "name": "sampleCommand",
        "usage": "ping",
        "aliases": ["sampleCommand"],

        "description": "This is an Sample Command",
        "format": "ping"      
    },

    "language": null,

    // Code that's runs before command
    _Initialize(msg, language){
        this.language = language;
    },


    // Main command code
    _Command(msg){
        msg.channel.send(this.language.response);
    },
}

module.exports = sampleCommand;