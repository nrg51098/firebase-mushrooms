import mycoData from '../../helpers/data/mycoData';

import utils from '../../helpers/utils';
import myco from '../myco/myco';

const buildHut = () => {
  mycoData.getMycos()
    .then((mycos) => {
      console.warn('Get mycos worked', mycos);
      let domString = `
      <h2 class="text-center">Huts</h2>
      <div class="d-flex flex-wrap">
      `;
      mycos.forEach((singleMyco) => {
        domString += myco.mycoMaker(singleMyco);
      });
      domString += '</div>';

      utils.printToDom('#huts', domString);
    })
    .catch((error) => console.error('get mycos broke :/', error));
};

export default { buildHut };
