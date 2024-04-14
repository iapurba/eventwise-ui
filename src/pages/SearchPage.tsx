import SearchBox from '../features/Search/SearchBox';
import TrendingEventList from '../features/Search/TrendingEventList';
import PageBuilder from './PageBuilder/PageBuilder';

const SearchPage = () => {
    return (
        <PageBuilder id="search-page">
            <SearchBox />
            <TrendingEventList />
        </PageBuilder>
    );
};

export default SearchPage;