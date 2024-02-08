
import { Suspense } from "react";
import SearchContent from "./content";

const Search = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchContent />
            </Suspense>
        </div>
    )
};

export default Search; 