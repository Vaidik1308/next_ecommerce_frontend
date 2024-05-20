import Categories from "@/components/public/landingPage/category/Categories";
import HorizontalCard from "@/components/public/landingPage/HorizontalCard";
import LatestProducts from "@/components/public/landingPage/LatestProducts";
import TrendingProducts from "@/components/public/landingPage/TrendingProducts";
import CardList from "@/components/reusableComponents/cardList/CardList";
import SingleCard from "@/components/reusableComponents/cardList/SingleCard";
import { latestProducts } from "@/lib/data/dummyData";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full px-5" >
      <div>
        {/* image will come here */}
        {/* Carousel will come here  */}
      </div>
      <div className="w-full my-4 shadow-lg pb-4">
        {/* categories list */}
        <Categories/>
      </div>
        <HorizontalCard imageUrl="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5483df11b3fc9f0b.jpg?q=20" />
      <div className="my-4">
        <LatestProducts/>
      </div>
        <HorizontalCard imageUrl="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/000ae78cf43bfa12.jpg?q=20"/>
      <div className="my-4">
        <TrendingProducts/>
      </div>
      <div className="my-12">
        <CardList className="flex justify-evenly " pathname="/" heading="Beast in Electronics">
        {
          latestProducts.reverse().map((product,i) => (
            <SingleCard key={i}>
              <Link href={`/s?q=${product.slug}`}>
                <div className='relative h-48 w-48 overflow-hidden'>
                    <Image src={product.image} alt='camera_img' fill className='object-cover rounded-t-md hover:scale-125 duration-300' />
                </div>
                <div className='w-full p-2 flex flex-col items-center group-hover:bg-gray-200 duration-300 rounded-b-md'>
                    <h4 className='text-lg'>{product.name}</h4>
                    <p className='text-sm font-bold'> From Rs.{product.price}</p>
                </div>
              </Link>
            </SingleCard>
          ))
        }
        </CardList>
      </div>
        <HorizontalCard imageUrl="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5483df11b3fc9f0b.jpg?q=20" />
      <div className="my-12 flex  w-full">
        <div className="flex-1">
          <CardList className="grid grid-cols-2 w-full gap-2" pathname="/" heading="Trending Gadgets and Electronics">
          {
            latestProducts.reverse().slice(0,4).map((product,i) => (
              <SingleCard key={i}>
                <Link className="w-full" href={`/s?q=${product.slug}`}>
                  <div className='relative h-60 w-60 overflow-hidden'>
                      <Image src={product.image} alt='camera_img' fill className='object-cover rounded-t-md hover:scale-125 duration-300' />
                  </div>
                  <div className='w-full p-2 flex flex-col items-center group-hover:bg-gray-200 duration-300 rounded-b-md'>
                      <h4 className='text-lg'>{product.name}</h4>
                      <p className='text-sm font-bold'> From Rs.{product.price}</p>
                  </div>
                </Link>
              </SingleCard>
            ))
          }
          </CardList>
        </div>
        <div className="flex-[1.5]">
          <HorizontalCard imageUrl="https://imgs.search.brave.com/XCKrJKC8DKDAVTWz07epZWEcU_W_QT5vAV7jTDpOvoI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFN0JS/cHZKUHcvMi8wLzE2/MDB3L2NhbnZhLW9y/YW5nZS1tb2Rlcm4t/bGluZS1zZWxlY3Rl/ZC1zdW1tZXItcHJv/bW90aW9uLWRpc2Nv/dW50LXByb2R1Y3Qt/c2FsZS1iYW5uZXIt/aEEzeG94Vm0xT2su/anBn"/>
        </div>
      </div>
    </main>
  );
}
