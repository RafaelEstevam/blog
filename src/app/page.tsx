import PostGallery from "./components/postGallery.component";
import PostHighlight from "./components/postHighlight.component";
import PostPagination from "./components/postPagination.component";

export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <div className="w-full md:w-3/4 flex flex-col gap-10">
        <PostHighlight />
        <PostGallery/>
        <PostPagination />
      </div>
    </main>
  );
}
