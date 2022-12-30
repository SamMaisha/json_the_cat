const { fetchBreedDescription } = require('../breedFetcher');

const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', () => {
    fetchBreedDescription('Siberian', (error, desc) => {

      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();

    });
  });

  it('returns an errir when an invalid or non exitent breed name is inputted', () => {
    fetchBreedDescription('', (error, desc) => {

      // desc will return null
      assert.equal(desc, null);

    });
  });

});