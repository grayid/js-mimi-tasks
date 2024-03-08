async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const userData = await response.json();

    // Пункт №1
    console.log('-----------');
    console.log('Пункт №1:');
    console.log('-----------');

    userData.data.forEach(user => console.log(user.last_name));

    // Пункт №2
    console.log('-----------');
    console.log('Пункт №2:');
    console.log('-----------');

    userData.data.filter(user => user.last_name.startsWith('F')).forEach(user => console.log(user));

    // Пункт №3
    console.log('-----------');
    console.log('Пункт №3:');
    console.log('-----------');

    let userList = userData.data.reduce((acc, user) => {
      acc.push(`${user.first_name} ${user.last_name}`);
      return acc;
    }, []);
    console.log(`Наша база содержит данные следующих пользователей: ${userList.join(', ')}`);

    // Пункт №4
    console.log('-----------');
    console.log('Пункт №4:');
    console.log('-----------');

    let userKeys = Object.keys(userData.data[0]);
    console.log(userKeys);
  } 
  
  catch (error) {
    console.log('Ошибка при получении данных:', error);
  }
}

fetchData();