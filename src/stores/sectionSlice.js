import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [
    {
      section: 'coursework',
      title: 'freeCodeCamp.org Front End Development Libraries Certification',
      link: 'https://www.freecodecamp.org/certification/ariwanss/front-end-development-libraries',
      timeStart: '2022',
      timeEnd: '2022',
      description: ['Built five projects to demonstrate understanding of front-end technologies such as HTML, CSS, JavaScript, and React.',
        'Projects: Build a Random Quote Machine, Build a Markdown Previewer, Build a Drum Machine, Build a JavaScript Calculator, Build a 25 + 5 Clock.'
        
      ]
    },
    {
      section: 'coursework',
      title: 'freeCodeCamp.org Back End Development and APIs Certification',
      link: 'https://www.freecodecamp.org/certification/ariwanss/back-end-development-and-apis',
      timeStart: '2022',
      timeEnd: '2022',
      description: ['Built five projects to demonstrate understanding of back-end and API development using Express and MongoDB.',
        'Projects: timestamp microservice, request header parser microservice, URL shortener microservice, exercise tracker, file metadata microservice.'
        
      ]
    },
    {
      section: 'coursework',
      title: 'freeCodeCamp.org Responsive Web Design Certification',
      link: 'https://www.freecodecamp.org/certification/ariwanss/responsive-web-design',
      timeStart: '2022',
      timeEnd: '2022',
      description: ['Built five projects to demonstrate understanding of various HTML elements and basic layout with CSS.',
        'Projects: Build a Survey Form, Build a Tribute Page, Build a Technical Documentation Page, Build a Product Landing Page, and Build a Personal Portfolio Webpage.'
        
      ]
    },
    {
      section: 'coursework',
      title: 'freeCodeCamp.org JavaScript Algorithm and Data Structures Certification',
      link: 'https://www.freecodecamp.org/certification/ariwanss/javascript-algorithms-and-data-structures',
      timeStart: '2022',
      timeEnd: '2022',
      description: ['Produce solutions using various algorithms and data structures to solve five challenges.',
        'Projects include palindrome checker, roman numeral converter, caesars chipper (encoding and decoding), telephone number validator, and cash register. '
        
      ]
    }
  ],
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
    },
    descriptionEdited: (state, action) => {
      
    },
    descriptionRemoved: (state, action) => {

    }
  }
});

export default sectionSlice.reducer;

export const { sectionAdded, sectionDeleted, shownSectionChanged, descriptionEdited, descriptionRemoved } = sectionSlice.actions;

export const selectSectionTitles = (state) => {
  return state.sections.entries.map(entry => entry.section);
}

export const selectSectionContent = (state, section) => {
  return state.sections.entries.filter(entry => entry.section === section.toLowerCase());
}

export const selectShownSection = (state) => {
  return state.sections.shownSection;
}