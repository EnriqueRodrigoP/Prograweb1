const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var users = [];
var usernames = [];


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

  function userNotExist(username,ID)
  {
    if(username == undefined || username === null)
    {
      return false;
    }
    var outcome = true;

    users.forEach(user=>{
      if(user.name ===username)
      {
        outcome = false;
      }
    }) ;
    if(outcome)
    {
      users.push({ name: username,id: ID });
      usernames.push(username);
    }
    return outcome;

  }

  function getID(username)
  {
    for(var i=0;i<users.length;i++)
    {
      if(users[i].name === username)
      {
        return users[i].id;
      }
    }
    return undefined;
  }

  function removeuser(username)
  {
    for(var i=0; i<users.length;i++)
    {
      if(users[i]===username || usernames[i]===username)
      {
        users.splice(i,1);
        usernames.splice(i,1);
      }
    }
  }

io.on('connection', (socket) => {

  socket.on('chat connect',(user)=>{
    console.log('User: '+user+' connected');
    if(userNotExist(user,socket.id))
    {
      socket.user=user;
      io.emit('chat message',`<-----${socket.user} joined the chat----->`)
      io.emit('chat message','Users online: '+usernames)
    }
  })

    socket.on('disconnect', () => { 
      console.log('User: '+socket.user+' disconnected');
      removeuser(socket.user);
      io.emit('chat message', `<-----${socket.user} left the chat----->`); 
      io.emit('chat message','Users online: '+usernames)
    });


   /* socket.on('joining msg', (username) => {///Mensaje que se ha unido
      name = username;
      io.emit('chat message', `---${name} se ha unido al chat---`);
    });*/


   /*socket.on('users conected', (user) => {///Mensaje que se ha unido
      name=user;
      users=[user];
      io.emit('chat message', `---${user} se ha unido al chat---`);
      for(i=0;i<users.length;i++)
      {
        io.emit('chat message','Usuarios conectados: '+ users[i]);  
      }
          
    });*/

    socket.on('chat message', (msg) => {
      socket.broadcast.emit('chat message',socket.user +':'+ msg);//mensaje a todos menos al que lo envía
    });

    socket.on('privatemessage',(user,msg)=>{
      var ID=0;
      if((ID=getID(user))!== undefined)
      {
        io.to(ID).emit('chat message',msg);
      }
      else
      {
        console.log("The user "+user+" does not exist");
      }
    })

  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});