
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

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile..skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.idiomas.map(language => `<li>${language.nome} (${language.nivel})</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(item => `<li>
        <h3 class="title">${item.nome}</h3>
        <a href="${item.gitHub}" target="_blank">${item.gitHub}</a>
    </li>`).join('');
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience');
    experience.innerHTML = profileData.experiencias.map(item => `<li>
        <h3 class="title">${item.nome} / ${item.instituicao}</h3>
        <p class="period">${item.periodo.inicio} - ${item.periodo.fim}</p>
        <p>${item.descricao}</p>
    </li>`).join('');
}

(async () =>  {
    

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);

    updateSoftSkills(profileData);

    updateHardSkills(profileData);

    updateLanguages(profileData);

    updatePortfolio(profileData);

    updateExperience(profileData);
    
})()