import Categories from "./components/categories.component";
import PostGallery from "./components/postGallery.component";
import PostHighlight from "./components/postHighlight.component";
import PostPagination from "./components/postPagination.component";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-10">
        <PostHighlight />
        <div className="w-full flex gap-8">
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-white">Últimas postagens</h3>
            <PostGallery/>
            <PostPagination />
          </div>
          <div className="w-full md:w-1/3 hidden flex-col gap-8 md:flex">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
