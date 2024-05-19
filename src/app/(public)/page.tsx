import Categories from "@/components/public/landingPage/category/Categories";
import LatestProducts from "@/components/public/landingPage/LatestProducts";


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
      <div>
        <LatestProducts/>
      </div>
    </main>
  );
}
