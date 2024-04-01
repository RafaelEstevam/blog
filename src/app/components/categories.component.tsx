import { gql } from 'graphql-request';
import {gql_client} from '../services';
import Link from 'next/link';

export interface CategoriesProps{
    id: string,
    name: string,
    slug: string
}

export const getCategories = async () => {
    const query = gql`
        query{
            postCategories {
                id
                name
                slug
            }
        }
    `;

    const {postCategories}:any = await gql_client.request(query);
    const categoriesList: CategoriesProps[] = postCategories;
    return categoriesList;
};

const Categories = async () => {

    const categories = await getCategories();

    return (
        <div className="w-full flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-white">Categorias</h3>
            <ul className='w-full flex flex-wrap gap-4'>
                {categories.map((item) => (
                    <li key={item.id} >
                        <Link href={`/category/${item.slug}`} className='block transition-all duration-150 ease-linear p-4 border-2 border-slate-700 rounded-xl hover:border-blue-600'>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Categories;