const http = require('http');

const lastNames = [
  "Zimmerman", "York", "Wyatt", "Wright", "Woods", "Wood", "Wong", "Wolf", 
  "Williams", "White", "Wheeler", "West", "Wells", "Weaver", "Watson", 
  "Washington", "Ward", "Wallace", "Walker", "Wagner", "Wade", "Turner", 
  "Tucker", "Torres", "Thomas", "Terry", "Taylor", "Sullivan", "Stone", 
  "Stewart", "Stevens", "Stephens", "Snyder", "Smith", "Simpson", "Simmons", 
  "Silva", "Shaw", "Scott", "Sanders", "Sanchez", "Russell", "Ruiz", "Ross", 
  "Rose", "Romero", "Rogers", "Robinson", "Roberts", "Rivera"
];

const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", 
  "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", 
  "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Lisa", 
  "Daniel", "Nancy", "Matthew", "Betty", "Anthony", "Margaret", "Mark", 
  "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", 
  "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Carol", "Kevin", "Amanda", 
  "Brian", "Melissa", "George", "Deborah", "Edward", "Stephanie"
];

const emails = [
  "j.zimmerman@gmail.com", "mary.york@yahoo.com", "j.wyatt88@gmail.com", 
  "p.wright@outlook.com", "r.woods@gmail.com", "jennifer.wood@gmail.com", 
  "michael.wong@hotmail.com", "l.wolf@gmail.com", "william.w@gmail.com", 
  "elizabeth.white@yahoo.com", "d.wheeler@gmail.com", "barbara.west@gmail.com", 
  "richard.wells@outlook.com", "susan.weaver@gmail.com", "joseph.watson@gmail.com", 
  "jessica.washington@hotmail.com", "t.ward@gmail.com", "sarah.wallace@gmail.com", 
  "c.walker@yahoo.com", "karen.wagner@gmail.com", "chris.wade@gmail.com", 
  "lisa.turner@outlook.com", "daniel.tucker@gmail.com", "nancy.torres@gmail.com", 
  "matt.thomas@hotmail.com", "betty.terry@gmail.com", "anthony.taylor@gmail.com", 
  "margaret.sullivan@yahoo.com", "mark.stone@gmail.com", "sandra.stewart@gmail.com", 
  "donald.stevens@outlook.com", "ashley.stephens@gmail.com", "steven.snyder@gmail.com", 
  "kimberly.smith@hotmail.com", "paul.simpson@gmail.com", "emily.simmons@gmail.com", 
  "andrew.silva@yahoo.com", "donna.shaw@gmail.com", "joshua.scott@gmail.com", 
  "michelle.sanders@outlook.com", "kenneth.sanchez@gmail.com", "carol.russell@gmail.com", 
  "kevin.ruiz@hotmail.com", "amanda.ross@gmail.com", "brian.rose@gmail.com", 
  "melissa.romero@gmail.com", "george.rogers@yahoo.com", "deborah.robinson@gmail.com", 
  "edward.roberts@outlook.com", "stephanie.rivera@gmail.com"
];

// Створення сервера
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    switch (req.url) {
      case '/api/lastnames':
        res.writeHead(200);
        res.end(JSON.stringify(lastNames));
        break;

      case '/api/firstnames':
        res.writeHead(200);
        res.end(JSON.stringify(firstNames));
        break;

      case '/api/emails':
        res.writeHead(200);
        res.end(JSON.stringify(emails));
        break;

      case '/api/users':
        const users = lastNames.map((lastName, index) => ({
          id: index + 1,
          firstName: firstNames[index],
          lastName: lastName,
          email: emails[index]
        }));
        res.writeHead(200);
        res.end(JSON.stringify(users));
        break;

      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Ендпоінт не знайдено. Спробуйте /api/lastnames, /api/firstnames, /api/emails або /api/users" }));
        break;
    }
  } else {
    // Якщо метод не GET (наприклад, POST або PUT)
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Метод не дозволено. Використовуйте GET-запити." }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Сервер успішно запущено!`);
});
