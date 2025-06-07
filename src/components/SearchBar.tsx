import React from 'react';

interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}


const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
    return (
        <input 
        type="text"
        placeholder="Search images..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='searchBar'
        />
    )
}


export default SearchBar;