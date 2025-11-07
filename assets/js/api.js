

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/GAMIDAm/Portfolio/refs/heads/projeto-base/data/profile.json';

    const fetching = await fetch(url)
    return await fetching.json();






    
} 