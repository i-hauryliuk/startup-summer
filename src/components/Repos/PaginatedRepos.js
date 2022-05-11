import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import Repos from './Repos';
import './PaginatedRepos.css';

const PaginatedRepos = (props) => {
  const [currentRepos, setCurrentRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [repoOffset, setRepoOffset] = useState(0);

  useEffect(() => {
    const endOffset = repoOffset + props.reposPerPage;
    setCurrentRepos(props.repos.slice(repoOffset, endOffset));
    setPageCount(Math.ceil(props.repos.length / props.reposPerPage));
  }, [repoOffset, props.reposPerPage, props.repos]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * props.reposPerPage) % props.repos.length;
    setRepoOffset(newOffset);
  };

  return (
    <div className="repos">
      <h2 className="repos__heading">Repositories ({props.repos.length})</h2>
      <Repos currentRepos={currentRepos} />
      <div className="pagination">
        <p className="pagination__info">
          {repoOffset + 1}-
          {repoOffset + props.reposPerPage > props.repos.length
            ? props.repos.length
            : repoOffset + props.reposPerPage}{' '}
          of {props.repos.length} items
        </p>
        <ReactPaginate
          className="page-switcher"
          pageLinkClassName="page-switcher__link"
          activeLinkClassName="page-switcher__link_active"
          breakLinkClassName="page-switcher__link"
          previousClassName="page-switcher__page_prev"
          previousLinkClassName="page-switcher__link page-switcher__link_prev"
          nextClassName="page-switcher__page_next"
          nextLinkClassName="page-switcher__link page-switcher__link_next"
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default PaginatedRepos;
