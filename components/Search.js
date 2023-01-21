import React from 'react'
import Navbar from './Navbar';

export interface IHeaderSearchProps {}

const HeaderSearch: React.FC<IHeaderSearchProps> = () => {
  const { history } = useRouter();
  const handleSearch = async (value: string) => {
    history.push(`/search?searchText=${value}`);
  };
  return (
    <div>
    <Search   placeholder="Search"
      onSearch={handleSearch}
      className="app-header__search"/></div>
  )
}


export default Search;