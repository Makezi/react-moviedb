import { normalize, schema } from 'normalizr';

const genre = new schema.Entity('genres');
const movie = new schema.Entity('movies', {
  genres: [genre]
});

const normalizedData = result => normalize(result, movie);

export default normalizedData;
