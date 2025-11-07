
function updateProfileInfo(profileData) {
    const name = document.getElementById('profile.name');
    const job = document.getElementById('profile.job');
    const location = document.getElementById('profile.location');
    const phone = document.getElementById('profile.phone');
    const email = document.getElementById('profile.email');

    name.innerText = profileData.nome;
    job.innerText = profileData.titulo;
    location.innerText = `${profileData.localidade.cidade}, ${profileData.localidade.estado}, ${profileData.localidade.pais}`;
    phone.innerText = profileData.telefone;
    phone.href = `tel:${profileData.telefone.replace(/\D/g, '')}`;
    email.innerText = profileData.email;
} 

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}


(async () =>  {
    

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);

    updateSoftSkills(profileData);

    
})()