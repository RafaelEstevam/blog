'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const SearchComponent = () => {

    const router = useRouter();
    const [term, setTerm] = useState('');

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault()
        const url = window.document.location.origin
        router.push(`${url}/search/?q=${term.toLowerCase()}`);
    }, [term]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input placeholder='Buscar post' className="bg-slate-600 rounded-2xl text-white w-full p-4" value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    )
};

export default SearchComponent;