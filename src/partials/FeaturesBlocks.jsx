import React from 'react';
import map from '../images/map.svg';
import puzzle from '../images/puzzle.svg';
import chemPerson from '../images/chemPerson.svg';

function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How it works</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="mb-12" src={map} width="200" height="150" alt="map" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Explore Locations</h4>
              <p className="text-gray-600 text-center">Zoom in on items in each room and look for hints. Some items may be useful, while others may be red herrings.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="mb-12" src={puzzle} width="240" height="150" alt="puzzle" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Solve Puzzles</h4>
              <p className="text-gray-600 text-center">Use the hints you have gathered to solve puzzles at each location. Collect items after solving each puzzle.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="mb-12" src={chemPerson} width="190" height="150" alt="chemistry person" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Spread Virus</h4>
              <p className="text-gray-600 text-center">Use the items you have collected throughout the locations to design a non-lethal virus.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
