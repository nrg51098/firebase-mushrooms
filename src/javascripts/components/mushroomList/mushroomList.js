import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';

import utils from '../../helpers/utils';

// get all mushrooms
// loop and create domstring
// printtodom

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.warn('Get mushrooms worked', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';

      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('get mushrooms broke :/', err));
  // const domString = '<h1>It does actually work</h1>';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
