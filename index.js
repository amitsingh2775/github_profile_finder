

let user_input=document.querySelector("#input");
const userphoto=document.querySelector(".main-info")
const bio=document.querySelector("#bio")
const repo= document.querySelector("#repo")
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const fl=document.querySelector("#flowers")
const fr=document.querySelector("#flow")
const rp=document.querySelector("#rp")

const fetchUser=(user_name)=>{
       fetch(`https://api.github.com/users/${user_name}`) 
          .then((data)=>data.json())
          .then((jsonData)=>{
            if(jsonData.message=="Not found"){
                alert("user not found")
                return 
            }
            else{
                userphoto.innerHTML=`<img src="${jsonData.avatar_url}"  id="p-img">
                <span class="name" id="name">${jsonData.name}</span>
                <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a> `

                bio.innerHTML=jsonData.bio
                repo.innerHTML=jsonData.public_repos
                rp.href=`https://github.com/${user_name}?tab=repositories`
                followers.innerHTML=jsonData.followers
                fl.href=`https://github.com/${user_name}?tab=followers`
                
                following.innerHTML=jsonData.following
                fr.href=`https://github.com/${user_name}?tab=following`

            }
          } )
          .catch((error)=>{
            alert(error);
          })
}


// function call acording to username
const getUser=()=>{
    let user_name=user_input.value.trim()
    // space ko remove kar diya before and after

    if(user_name.length==0){
        alert("enter vaild github username")
    }
    else{
        fetchUser(user_name)
    }
    user_input.value=""
}