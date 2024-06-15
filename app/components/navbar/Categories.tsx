'use client';

import React from 'react';
import Container from '../Container';
import CategoryBox from './CategoryBox'; // Assuming CategoryBox is defined in a separate file

import { TbBeach , TbMountain, TbPool} from 'react-icons/tb';
import { GiWindmill , GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { useSearchParams , usePathname} from 'next/navigation';
import { FaSkiing } from 'react-icons/fa';
import { BiCloudSnow } from 'react-icons/bi';
import { IoDiamond } from 'react-icons/io5';


// Define categories as an array of objects
export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Beach properties'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Windmill properties'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Villa properties'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Countryside properties'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Pool properties'
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Beach properties'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Island properties'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Lake nearby properties'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Skiing activities properties'
  },
  {
    label: 'Castle',
    icon: GiCastle,
    description: 'Castle properties'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Properties with Camping activities'
  },
  {
    label: 'Arctic',
    icon: BiCloudSnow,
    description: 'Snowfall nearby Properties'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'Cave properties'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Desert properties'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'Barn properties'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Luxorious properties'
  },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage){
        return null;
    }
  return (
    <Container>
      <div className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
      ">
       
        {categories.map((item,index) => (
          <CategoryBox
            key={index}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
    