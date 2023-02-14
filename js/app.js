console.log('teams')
// SELEZIONO ELEMENTO HTML CON LA VARIABILE PER RIPORTARE LE INFORMAZIONI
const teamHtml = document.getElementById('team-list-member')
// CREO UNA VARIABILE DI COLLEGAMENTO PER 'COPIARLA'
let teamList =''
// CREAZIONE ARRAY DI OGGETTI DI OGNI MEMBRO
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/wayne-barnett-founder-ceo.jpg'

    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg'
    }
];
//   CICLO FOR IN CHE MI STAMPA IN CONSOLE NOME,RUOLO,FOTO DEI MEMBRI SCORRENDO OGNI ELEMENTO DI TEAMMEMBERS
for (let i in teamMembers) {

    console.log(`Nome: ${teamMembers[i].nome}`);
    console.log(`Ruolo: ${teamMembers[i].ruolo}`);
    console.log(`Foto: ${teamMembers[i].foto}`);
}
// CICLO FOR IN PER STAMPARE CON IL LITERAL LE CARD DEI TEAMS
for (let i in teamMembers) {
    teamList += `
    <div class="team-member flex">
            <img src="${teamMembers[i].foto}" alt="${teamMembers[i].nome}">
            <h2>${teamMembers[i].nome}</h2>
            <h3>${teamMembers[i].ruolo}</h3>
    </div>
    `
}
// ASSEGNO IL VALORE DELLA VARIBAILE TEAMLIST A teamHtml
teamHtml.innerHTML = teamList

