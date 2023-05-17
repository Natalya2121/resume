// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяць",
  address: "Ukraine, Lviv",
}

var footer = {
  social: {
    email: {
      text: "dmytro@mail.com",
      href: "mailto:dmytro@mail.com",
    },
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dmytro-test",
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    pege: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
              work on a new project I learn the domain and try to understand the idea of the project. Good team
              player, every colleague is a friend to me.`,
      },

      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,

  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    pege: {
      title: "Resume | Skills",
    },

    header,

    main: {
      skills: [
        { name: "HTML", point: 10, isTop: true },
        { name: "Handlebars", point: 10, isTop: true },
        { name: "VS Code", point: 9 },
        { name: "Git", point: 9 },
        { name: "Terminal & NPM", point: 8 },
        { name: "React.js", point: 0 },
        { name: "PHP", point: null },
      ],
      hobbies: [
        { name: "Reading", isMain: true },
        { name: "Painting", isMain: false },
        { name: "Cooking", isMain: false },
      ]
    },

    footer,

  })
})


router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    pege: {
      title: "Resume | Education",
    },

    header,

    main: {
      educations: [
        { name: "Franko's Lviv National University", isEnd: true },
        { name: "Kyiv University of Culture", isEnd: false },
      ],
      certificates: [
        { name: "Сertificate 1", id: 1 },
        { name: "Сertificate 2", id: 2 },
        { name: "Сertificate 3", id: 3 },
      ],
    },

    footer,

  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: "big",
    pege: {
      title: "Resume | Work",
    },

    header,

    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: { name: "IT Brains", url: null },
          duration: { from: "10.10.2022", to: null },
          projectAmount: 1,
          projects: [{
            name: "Resume",
            url: "https://it-brains.com.ua/",
            about: "This returns the average CLR time, the total CLR time",
            stacks: [
              { name: "React.js" },
              { name: "HTML / CSS" },
              { name: "Nodejs" },
            ],
            awards: [
              { name: "The Package object is the top-level container" },
              { name: "Tasks perform most of the work performed by a package" },
            ],
            stackAmount: 3,
            awardAmount: 2,
          }
          ],
        },
      ],
    },

    footer,

  })
})


// створіть container person, в якому ви виведете всі ці змінні,
//   які є в ендпоїнті person

//     < створіть layout person, в якому буде лише базова структура
// HTML документа без header, footer, nav

//   < підключіть layout person до вашого ендпоїнта person

//     < напишіть верстку в container person та виведіть всі дані, які у
// вас є в ендпоїнті person

//   < які саме теги та як верстати - вам потрібно самостіdно
// вирішити це, але дотримуdтесь семантики та розділяdте між
// собою контент за допомого тегу br та hr

//   < створіть окрему вітку під назвою person від вітки master,
//     в які ви зробите це завдання

//       < після виконання завдання створіть pull request з вітки person
// у вітку master та приdміть самостіdно pull request

//   < як виконане завдання відправте скріншоти вашого коду,
//     скріншоти з браузера та скріншот сторінки pull request, якиd
// ви приdняли



router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: "person",
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
