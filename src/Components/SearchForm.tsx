import React from 'react';

interface Props {
  search(query: string): void;
}

const SearchForm: React.FC<Props> = (props) => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    props.search((formData.get('query') || '') as string);
  }

  return (
    <form className="relative mx-0 flex items-center justify-between mt-4 mb-6" onSubmit={handleSubmit}>
      <svg width="20" height="20" fill="white" className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
      </svg>
      <input
        id="query"
        type="text"
        name="query"
        placeholder="Enter player's id"
        className="focus:outline-none bg-black rounded w-full text-sm text-white placeholder-primary border border-gray-divider py-2 pl-10 mr-2"
        aria-label="Enter player's id"/>
      <button className="group flex items-center bg-green-brand text-secondary hover:bg-gray-hover rounded text-sm font-medium px-4 py-2">
        GO
      </button>
    </form>
  );
};

export default SearchForm;
