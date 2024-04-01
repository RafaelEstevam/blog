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
        <ul className='w-full flex flex-wrap gap-4'>
            {categories.map((item) => (
                <li key={item.id} >
                    <Link href={`/category/${item.slug}`} className='block transition-all duration-150 ease-linear p-4 border-2 border-slate-700 rounded-xl hover:border-blue-600'>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
};

export default Categories;