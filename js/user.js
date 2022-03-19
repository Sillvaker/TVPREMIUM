async function fetchServidor() {
    const url = 'https://discord.com/api/guilds/778487230544216064/widget.json';
    return fetch(url)
        .then(response => response.json())
        .then(servidor => {

            const member = servidor.members.filter(members => members.username === 'Mega')[0]
            console.log(member)

            document.querySelector('.userName').textContent = member.username + '#9459';
            let imgUser = document.createElement('img');
            imgUser.src = member.avatar_url;
            imgUser.style.borderRadius = '30em'
            imgUser.style.width = '1.3em'
            document.querySelector('.discordUserAvatar').appendChild(imgUser)
        })
}

//setInterval(() => fetchServidor(), 2 * 60000);
console.log(fetchServidor())