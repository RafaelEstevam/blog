import { Suspense } from "react";
import CategoryContent from "./content";
import Loading from "../../components/loading.component";

const Category = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <div className="w-full">
                <CategoryContent />
            </div>
        </Suspense>
    )
};

export default Category; 