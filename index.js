main();

async function getProfile(){
  let profile = await liff.getProfile()
  document.body.appendChild(document.createElement("p")).innerText = profile.userId
  document.body.appendChild(document.createElement("p")).innerText = profile.statusMessage
  document.body.appendChild(document.createElement("p")).innerText = profile.displayName
  document.body.appendChild(document.createElement("img")).src = profile.pictureUrl
}

async function main(){
  await liff.init({liffId:"1656631126-wg1J4QWV"})
  switch(liff.getOS()){
    case "android":document.body.style.backgroundColor = "green";break
    case "ios":document.body.style.backgroundColor = "pink";break
    case "web":document.body.style.backgroundColor ="black";break
  }
  getProfile();
}
