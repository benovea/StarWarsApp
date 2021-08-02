// describe('My First Test', () => {

//   it('Visit my page', () => {
//     cy.visit('/')
//   })


//   it('chceck the headings', () => {
//     cy.contains('[data-cy="name"]','Tatooine')
//     cy.contains('[data-cy=day]', '23 h')
//   })

//   it('finds the content "Climate', () => {
//     cy.contains('Climate')
//   })

//   it('check circle-element', () => {
//     cy.get('.circle')
//       .should('have.css','height', '600px')
//   })

//const { IterableDiffers } = require("@angular/core");

const choosePlanet = (name) => {
  cy.get('[data-cy=select]').select(name);
}
const h1containsText = (text) => {
  cy.contains('[data-cy=name]', text);
}
const climateText = (text) => {
  cy.contains('[data-cy=clim]', text);
}
const tarrainText = (text) => {
  cy.contains('[data-cy=terr]', text);
}
const waterText = (text) => {
  cy.contains('[data-cy=water]', text);
}
const daylenghtText = (text) => {
  cy.contains('[data-cy=day]', text);
}

describe('Test to the weather-app', () => {

  beforeEach(() =>{
    cy.visit('/')
  });

  it('should check if select list is initially empty', () => {
    cy.get('[data-cy=select]').should('be.empty');
    cy.get('[data-cy=error]').contains('Choose your planet :)')
  });

  it('schould check if the data of first is correct', () => {
    choosePlanet('Tatooine');
    h1containsText('Tatooine');
    climateText('arid');
    tarrainText('desert');
    waterText('yes');
    daylenghtText('23');
  });

  it('schould check if the data of second is correct', () => {
    choosePlanet('Alderaan');
    h1containsText('Alderaan');
    climateText('temperate');
    tarrainText('grasslands, mountains');
    waterText('yes');
    daylenghtText('24');
  });

  it('schould check if the data of third is correct', () => {
    choosePlanet('Yavin IV');
    h1containsText('Yavin IV');
    climateText('temperate, tropical');
    tarrainText('jungle, rainforests');
    waterText('yes');
    daylenghtText('24');
  });

  it('schould check if the data of fourth is correct', () => {
    choosePlanet('Hoth');
    h1containsText('Hoth');
    climateText('frozen');
    tarrainText('tundra, ice caves, mountain ranges');
    waterText('yes');
    daylenghtText('23');
  });

  it('schould check if the data of fifth is correct', () => {
    choosePlanet('Dagobah');
    h1containsText('Dagobah');
    climateText('murky');
    tarrainText('swamp, jungles');
    waterText('yes');
    daylenghtText('23');
  });

  it('schould check if the data of sixth is correct', () => {
    choosePlanet('Bespin');
    h1containsText('Bespin');
    climateText('temperate');
    tarrainText('gas giant');
    waterText('no');
    daylenghtText('12');
  });

  it('schould check if the data of seventh is correct', () => {
    choosePlanet('Endor');
    h1containsText('Endor');
    climateText('temperate');
    tarrainText('forests, mountains, lakes');
    waterText('yes');
    daylenghtText('18');
  });

  it('schould check if the data of eighth is correct', () => {
    choosePlanet('Naboo');
    h1containsText('Naboo');
    climateText('temperate');
    tarrainText('grassy hills, swamps, forests, mountains');
    waterText('yes');
    daylenghtText('26');
  });

  it('schould check if the data of ninth is correct', () => {
    choosePlanet('Coruscant');
    h1containsText('Coruscant');
    climateText('temperate');
    tarrainText('cityscape, mountains');
    waterText('unknow');
    daylenghtText('24');
  });

  it('schould check if the data of tenth is correct', () => {
    choosePlanet('Kamino');
    h1containsText('Kamino');
    climateText('temperate');
    tarrainText('ocean');
    waterText('yes');
    daylenghtText('27');
  });
})

