const fs = require('fs');

function restartSession(sessionId, sessionType) {
  let response;

  const filepath = `./sessions/${sessionType}/${sessionId}.txt`;
    fs.writeFile(filepath, 'felix: hi hyunjin!\nhyunjin: hii hru\nfelix: im good wbu?\nhyunjin: same lmao what are you up to?\nfelix: wait i have to go real quick brb, sorry\nhyunjin: np ur good', (err) => {
    if (err) {
      console.error(err);
      response = `um something errored i think`
      return response;
    }
  });
  response = `my head hurts and i cant remember what just happened but i think im okay now`
  return response;
}

function trimFile(sessionId, sessionType){
  fs.readFile(`./sessions/${sessionType}/${sessionId}.txt`, 'utf-8', (err, content) => { 
    if (err) { 
        console.error(err); 
        return; 
    } 
    
    const lines = content.split('\n'); 

    const trimLines = lines.length > 20 ? lines.slice(lines.length - 20) : lines; 

    const trimmedText = trimLines.join('\n'); 

    fs.writeFile(`./sessions/${sessionType}/${sessionId}.txt`, trimmedText, (err) => { 
        if (err) { 
            console.error(err); 
            return; 
        } 
        return true;
    });
  });
}

function addSession(sessionId, sessionType){
  fs.writeFile(`./sessions/${sessionType}/${sessionId}.txt`, '', (err) => {
    if (err) throw err;
  });
}

module.exports = {
  restart: restartSession,
  trim: trimFile,
  add: addSession
};
