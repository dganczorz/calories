import seedIngredients from './ingredients-seeder';

export default () => {
    let promises = [];
    console.debug(`Seeder: Start`);
    console.debug(`Seeder: Ingredients`);
    promises.push(
        seedIngredients().then(() => console.debug(`Seeder: Ingredients - DONE`))
    );
    return Promise.all(promises).then(() => console.debug(`Seeder: DONE`));
};
