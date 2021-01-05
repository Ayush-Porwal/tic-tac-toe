const leaderboard = [
    { Name: 'Ayush', Points: 0 },
    { Name: 'Rahul', Points: 0 },
    { Name: 'Soumya', Points: 0 },
    { Name: 'Prakhar', Points: 0 },
    { Name: 'Shikhar', Points: 0 },
    { Name: 'Arnab', Points: 0 },
    { Name: 'Vatsal', Points: 0 },
    { Name: 'Aaryan', Points: 0 },
];

const table = document.querySelector('.leadertable');
const selectPlayer1 = document.querySelector('.player1');
const selectPlayer2 = document.querySelector('.player2');

leaderboard.forEach((person) => {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    const tableNameData = document.createElement('td');
    tableRow.appendChild(tableNameData);
    const tablePointsData = document.createElement('td');
    tableRow.appendChild(tablePointsData);
    tableNameData.innerHTML = person.Name;
    tablePointsData.innerHTML = person.Points;
    const option1 = document.createElement('option');
    option1.innerHTML = person.Name;
    option1.value = person.Name;
    option1.classList.add(person.Name);
    const option2 = document.createElement('option');
    option2.innerHTML = person.Name;
    option2.value = person.Name;
    option2.classList.add(person.Name);
    selectPlayer1.appendChild(option1);
    selectPlayer2.appendChild(option2);
});

const players = document.querySelector('.banner');
