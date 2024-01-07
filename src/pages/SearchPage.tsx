import PageWrapper from '../components/common/wrappers/PageWrapper';
import SearchBox from '../features/search/SearchBox';
import TrendingEventList from '../features/search/TrendingEventList';

const SearchPage = () => {
    return (
        <PageWrapper id="search-page">
            <SearchBox />
            <TrendingEventList />
        </PageWrapper>
    );
};

export default SearchPage;