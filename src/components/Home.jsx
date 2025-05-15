import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  console.log(coffees)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          coffees.map((coffee)=> <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default Home;