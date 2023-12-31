import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import CarCard from '@/components/CarCard'
import SearchBar from '@/components/SearchBar'
import { fetchcars } from '@/utils'
import Image from 'next/image'
import { fuels, yearsOfProduction } from '@/constants'
import ShowMore from '@/components/ShowMore'
  import { SearchParams } from '@/types'


export default async function Home({ searchParams }: { searchParams: SearchParams }) {
const Allcars = await fetchcars({
  manufacturer:searchParams.manufacturer || '',
  year:searchParams.year|| 2022,
  fuel:searchParams.fuel|| '',
  limit:searchParams.limit|| 10,
  model:searchParams.model|| ''
})


const DataisEmpty = !Array.isArray(Allcars) || Allcars.length <1 || !Allcars

  return (
    <main className='overflow-hidden ' >
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue

          </h1>
          <p>Explore the Cars you might like</p>

        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
{!DataisEmpty ? (<section>
  <div className='home__cars-wrapper'>
    {Allcars?.map((car)=>(
      <CarCard car={car}/>
    ))}
  </div>
  <ShowMore 
  pageNumber ={(searchParams.limit || 10)/10}
  isNext={(searchParams.limit || 10)> Allcars.length}
  />
  
  </section>):
(<div className='home__error-container'>
  <h2 className='text-black text-xl font-bold'>
    Ooops, no results
  </h2>

</div>)}
      </div>
    </main>
  )
}
