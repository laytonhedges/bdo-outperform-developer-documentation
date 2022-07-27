import { Api } from '../models/sections';

// SECTION | SECTION | SECTION
// ---------------------------
//-TOPIC----------------------
//-----CONTENT----------------
//----------POINT-------------
//----------POINT-------------
//-----CONTENT----------------
//----------POINT-------------
//----------POINT-------------
//-TOPIC----------------------
//-----CONTENT----------------
//----------POINT-------------
//----------POINT-------------
//-----CONTENT----------------
//----------POINT-------------
//----------POINT-------------

export const api: Api = {
  sections: [
    {
      title: 'Getting Started',
      topics: [
        {
          title: 'Installation',
          content: [
            {
              title: 'Clone Repo',
              ordered: true,
              points: [
                {
                  text: 'Go to the Azure DevOps Repo',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                },
                {
                  text: 'Click on clone',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                  img: {
                    path: 'assets/images/powerBi-mike_001_31052022_074418.jpg',
                    name: 'Clone Image',
                    ext: 'jpg',
                  },
                  pdf: {
                    name: 'Test',
                    path: 'assets/pdfs/db-diagram.pdf',
                  },
                },
                {
                  text: 'In any folder on your PC, open git bash and run the following: git clone {insert-link-you-copied}',
                },
              ],
            },
            {
              title: 'Clone Repo',
              ordered: false,
              points: [
                {
                  text: 'Go to the Azure DevOps Repo',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                },
                {
                  text: 'Click on clone',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                  pdf: {
                    name: 'Test',
                    path: 'assets/pdfs/db-diagram.pdf',
                  },
                },
                {
                  text: 'In any folder on your PC, open git bash and run the following: git clone {insert-link-you-copied}',
                },
              ],
            },
            {
              title: 'Run Locally',
              ordered: false,
              points: [
                {
                  text: 'ERD',
                  img: {
                    ext: 'svg',
                    name: 'OutPerform ERD',
                    path: 'assets/svgs/erd.svg',
                  },
                },
                {
                  text: 'Un linked',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Coding Standards',
      topics: [
        {
          title: 'Naming Conventions',
          content: [
            {
              title: 'Javascript',
              ordered: false,
              points: [
                {
                  text: 'Function names, class properties and variable names use pascal case. Eg: myFancyFunction()',
                },
                {
                  text: 'Class names use camel case. Eg: MyFancyClass',
                },
                {
                  text: 'Use const as often as possible, and let when needed. Try avoid the use of var.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'API',
      topics: [
        {
          title: 'Generic Repository',
          content: [
            {
              title: 'FindByCondition',
              ordered: false,
              points: [
                {
                  text: 'Filters relevant repository based on the condition that is passed',
                },
                {
                  text: 'Is a wrapper over the EF core Where() method',
                },
                {
                  text: 'Returns and IQuerayble<T>',
                },
              ],
            },
            {
              title: 'ExistsByCondition',
              ordered: false,
              points: [
                {
                  text: 'Accepts an expression and returns true or false. Is a wrapper arround the EF Core/LINQ Where method.',
                  link: 'https://google.com',
                },
              ],
            },
          ],
        },
        {
          title: 'Real Time Hub',
          content: [
            {
              title: 'OnConnectedAsync',
              ordered: false,
              points: [
                {
                  text: 'Automatically called by SignalR whena client connects to the Hub.',
                },
                {
                  text: 'Useful for keeping track of connected users.',
                },
              ],
            },
            {
              title: 'OnDisconnectedAsync',
              ordered: false,
              points: [
                {
                  text: 'Automatically called by SignalR whena client disconnects from the Hub.',
                },
                {
                  text: 'Useful for keeping track of connected users, and cleaning up relevant data when a user disconnects from the application.',
                },
              ],
            },
          ],
        },
        {
          title: 'Base Api Controllers',
          content: [
            {
              title: 'SendCommand',
              ordered: false,
              points: [
                {
                  text: 'Invokes Mediatr.Send and returns in an Ok result.',
                },
                {
                  text: 'Accepts a command or query that implemtns the IRequest interface.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Dev Docs',
      topics: [
        {
          title: 'DEVVVVV',
          content: [
            {
              title: 'Clone Repo',
              ordered: false,
              points: [
                {
                  text: 'Go to the Azure DevOps Repo',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                },
                {
                  text: 'Click on clone',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                  pdf: {
                    name: 'Test',
                    path: 'assets/pdfs/dev-docs.pdf',
                  }
                },
                {
                  text: 'In any folder on your PC, open git bash and run the following: git clone {insert-link-you-copied}',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Technical Stack',
      topics: [
        {
          title: 'Front End',
          content: [
            {
              title: 'Angular',
              ordered: false,
              points: [
                {
                  text: "The front end of OutPerform is an Angular website, often refered to as the 'client'.",
                  link: 'https://angular.io/',
                },
                {
                  text: 'We chose Angular as our front end technology because it allows us to rapidly build highly customizable user interfaces.',
                },
                {
                  text: 'Watch the below video for an introduction into the Angular framework.'
                },
              ],
            },
            {
              title: 'Angular Material',
              ordered: false,
              points: [
                {
                  text: 'We make use of the angular material design library for a large number of our form control components.',
                  link: 'https://material.angular.io/',
                },
              ],
            },
          ],
        },
        {
          title: 'A System Overview',
          content: [
            {
              title: 'Clone Repo',
              ordered: false,
              points: [
                {
                  text: 'Go to the Azure DevOps Repo',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                },
                {
                  text: 'Click on clone',
                  link: 'https://dev.azure.com/BDO-SouthAfrica/BDO%20OutPerform/_git/BDO_OutPerform',
                  pdf: {
                    name: 'Test',
                    path: 'assets/pdfs/dev-docs.pdf',
                  }
                },
                {
                  text: 'In any folder on your PC, open git bash and run the following: git clone {insert-link-you-copied}',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
