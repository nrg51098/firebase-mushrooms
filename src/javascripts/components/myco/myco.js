const mycoMaker = (myco) => {
  const domString = `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <div class="card-header">${myco.name}</div>
          <p class="card-text">I am <b>${myco.age}</b> years old</p>
        </div>
      </div>
    </div>
    `;

  return domString;
};

export default { mycoMaker };
