const http = require('http');

const lastNames = [
  "Zane", "Young", "Xiong", "Xavier", "Wilson", "White", "Vaughn", "Vance", 
  "Upton", "Underwood", "Thompson", "Taylor", "Smith", "Scott", "Robinson", 
  "Reed", "Quinn", "Quigley", "Perez", "Parker", "Owens", "Ortiz", "Nguyen", 
  "Nelson", "Moore", "Miller", "Lewis", "Lee", "King", "Kelly", "Jones", 
  "Jackson", "Irwin", "Ingram", "Harris", "Hall", "Green", "Garcia", "Foster", 
  "Ford", "Evans", "Edwards", "Diaz", "Davis", "Clark", "Carter", "Brooks", 
  "Baker", "Allen", "Adams"
];

const firstNames = [
  "Zachary", "Zoe", "Xander", "Xena", "William", "Willow", "Victor", "Victoria", 
  "Ulysses", "Uma", "Thomas", "Tara", "Samuel", "Sophia", "Ryan", "Rachel", 
  "Quincy", "Quinn", "Paul", "Penelope", "Oliver", "Olivia", "Noah", "Nora", 
  "Mason", "Mia", "Liam", "Lucy", "Kevin", "Kylie", "Jack", "Julia", "Ian", 
  "Isabella", "Henry", "Hannah", "George", "Grace", "Felix", "Fiona", "Ethan", 
  "Emma", "Daniel", "Diana", "Charlie", "Chloe", "Bob", "Brenda", "Aaron", 
  "Alice"
];

const emails = [
  "zachary.zane@outlook.com", "zoe.young@gmail.com", "xander.xiong@hotmail.com", "xena.xavier@gmail.com", 
  "william.wilson@yahoo.com", "willow.white@gmail.com", "victor.vaughn@outlook.com", "victoria.vance@gmail.com", 
  "ulysses.upton@yahoo.com", "uma.underwood@gmail.com", "thomas.thompson@hotmail.com", "tara.taylor@gmail.com", 
  "samuel.smith@yahoo.com", "sophia.scott@gmail.com", "ryan.robinson@gmail.com", "rachel.reed@outlook.com", 
  "quincy.quinn@gmail.com", "quinn.quigley@gmail.com", "paul.perez@yahoo.com", "penelope.parker@hotmail.com", 
  "oliver.owens@gmail.com", "olivia.ortiz@gmail.com", "noah.nguyen@outlook.com", "nora.nelson@yahoo.com", 
  "mason.moore@gmail.com", "mia.miller@gmail.com", "liam.lewis@hotmail.com", "lucy.lee@gmail.com", 
  "kevin.king@yahoo.com", "kylie.kelly@gmail.com", "jack.jones@gmail.com", "julia.jackson@outlook.com", 
  "ian.irwin@gmail.com", "isabella.ingram@yahoo.com", "henry.harris@gmail.com", "hannah.hall@gmail.com", 
  "george.green@hotmail.com", "grace.garcia@gmail.com", "felix.foster@yahoo.com", "fiona.ford@gmail.com", 
  "ethan.evans@outlook.com", "emma.edwards@gmail.com", "daniel.diaz@gmail.com", "diana.davis@yahoo.com", 
  "charlie.clark@gmail.com", "chloe.carter@hotmail.com", "bob.brooks@gmail.com", "brenda.baker@outlook.com", 
  "aaron.allen@yahoo.com", "alice.adams@gmail.com"
];

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
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Метод не дозволено. Використовуйте GET-запити." }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Сервер успішно запущено!`);
});
