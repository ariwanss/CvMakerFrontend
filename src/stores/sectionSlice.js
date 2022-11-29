import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries:
  {
    'Education': [
      
    ],
    'Work Experience': [

    ],
    'Certification': [
      
    ],
    'Skills': [
      
    ],
    'Coursework': [
      {
        title: 'freeCodeCamp.org Front End Development Libraries Certification',
        link: 'https://www.freecodecamp.org/certification/ariwanss/front-end-development-libraries',
        yearStart: '2022',
        yearEnd: '2022',
        description: ['Built five projects to demonstrate understanding of front-end technologies such as HTML, CSS, JavaScript, and React.',
          'Projects: Build a Random Quote Machine, Build a Markdown Previewer, Build a Drum Machine, Build a JavaScript Calculator, Build a 25 + 5 Clock.'
          
        ]
      },
      {
        title: 'freeCodeCamp.org Back End Development and APIs Certification',
        link: 'https://www.freecodecamp.org/certification/ariwanss/back-end-development-and-apis',
        yearStart: '2022',
        yearEnd: '2022',
        description: ['Built five projects to demonstrate understanding of back-end and API development using Express and MongoDB.',
          'Projects: timestamp microservice, request header parser microservice, URL shortener microservice, exercise tracker, file metadata microservice.'
          
        ]
      },
      {
        title: 'freeCodeCamp.org Responsive Web Design Certification',
        link: 'https://www.freecodecamp.org/certification/ariwanss/responsive-web-design',
        yearStart: '2022',
        yearEnd: '2022',
        description: ['Built five projects to demonstrate understanding of various HTML elements and basic layout with CSS.',
          'Projects: Build a Survey Form, Build a Tribute Page, Build a Technical Documentation Page, Build a Product Landing Page, and Build a Personal Portfolio Webpage.'
          
        ]
      },
      {
        title: 'freeCodeCamp.org JavaScript Algorithm and Data Structures Certification',
        link: 'https://www.freecodecamp.org/certification/ariwanss/javascript-algorithms-and-data-structures',
        yearStart: '2022',
        yearEnd: '2022',
        description: ['Produce solutions using various algorithms and data structures to solve five challenges.',
          'Projects include palindrome checker, roman numeral converter, caesars chipper (encoding and decoding), telephone number validator, and cash register. '
          
        ]
      }
    ],
    'Volunteering': [
      
    ],
  },
  shownSection: ''
};

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    sectionAdded: (state, action) => {
      state.entries[action.payload] = [];
    },
    sectionDeleted: (state, action) => {
      let index = state.sections.entries.indexOf(action.payload);
      state.entries.splice(index, 1);
    },
    shownSectionChanged: (state, action) => {
      state.shownSection = action.payload;
    }
  }
});

export default sectionSlice.reducer;

export const { sectionAdded, sectionDeleted, shownSectionChanged } = sectionSlice.actions;

export const selectSectionTitles = (state) => {
  return Object.keys(state.sections.entries);
}

export const selectSectionContent = (state, title) => {
  return state.sections.entries[title];
}

export const selectShownSection = (state) => {
  return state.sections.shownSection;
}