import React, { useState } from 'react';

interface ArtistSearchProps {
  onSearch: (query: string) => void;
}

const ArtistSearch: React.FC<ArtistSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an artist"
        className="p-2 border rounded w-full mb-2"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default ArtistSearch;