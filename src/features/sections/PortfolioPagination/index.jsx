import { useState, useMemo, useRef, useEffect } from 'react';
import { ContentWrapper } from '@/components/ContentWrapper';
import { portfolioPagination } from '@/data/portfolio';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';
import Card from './Card';

export const PortfolioPagination = () => {
  const { t } = useTranslation();
  const refList = useRef({});
  const [currentFilter, setCurrentFilter] = useState('all');
  const allList = useMemo(() => {
    let finalList = [];
    portfolioPagination.filters.map(
      (item) =>
        item.id !== 'all' && (finalList = [...finalList, ...portfolioPagination.lists[item.id]]),
    );
    return finalList;
  }, []);
  const [currentList, setCurrentList] = useState(allList);

  const itemsPerPage = 9; // Adjust this value according to your design
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = currentList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentList.slice(indexOfFirstItem, indexOfLastItem);

  const handleFilterChange = (filterId) => {
    setCurrentFilter(filterId);
    if (filterId !== 'all') {
      const list = portfolioPagination.lists[filterId];
      setCurrentList(list);
      setCurrentPage(1); // Reset current page when changing filters
    } else {
      setCurrentList(allList);
      setCurrentPage(1);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(1, pageNumber), totalPages));
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

 /*  async function scrollToX() {
    if (refList.current) {
      requestAnimationFrame(() => {
        refList.current.scrollLeft += 500;
      });
    }
  }
  async function scrollFromX() {
    if (refList.current) {
      requestAnimationFrame(() => {
        refList.current.scrollLeft -= 500;
      });
    }
  } */

  useEffect(() => {
 
  }, []);
  return (
    <ContentWrapper>
      <div className={styles.pagination}>
        <div ref={refList} className={styles.pagination__filters}>
          {portfolioPagination.filters.map((item) => (
            <div
              className={styles.pagination__filters__item}
              key={`filter-${item.id}`}
              onClick={() => handleFilterChange(item.id)}
              style={{ color: item.id === currentFilter ? 'white' : '#B1B1B1' }}
            >
              {t(item.filterName)}
            </div>
          ))}
        </div>
        <div className={styles.pagination__list}>
          {currentItems.map((card, i) => (
            <Card key={`card-${i}`} card={card} i={i} />
          ))}
        </div>
        <div className={styles.pagination__nav}>
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            <Image src="img/icons/first.svg" alt="" width={16} height={16} />
          </button>
          <button onClick={prevPage} disabled={currentPage === 1}>
            <Image src="img/icons/prev.svg" alt="" width={16} height={16} />
          </button>
          {currentPage <= 2 ? (
            <>
              {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? styles.active : ''}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              {totalPages > 3 && <button>...</button>}
            </>
          ) : (
            <>
              {currentPage > 2 && <button>...</button>}
              {currentPage === totalPages ? (
                <button onClick={() => goToPage(currentPage - 2)}>{currentPage - 2}</button>
              ) : null}
              <button onClick={() => goToPage(currentPage - 1)}>{currentPage - 1}</button>
              <button className={styles.active}>{currentPage}</button>
              {currentPage < totalPages ? (
                <button onClick={() => goToPage(currentPage + 1)}>{currentPage + 1}</button>
              ) : null}
            </>
          )}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <Image src="img/icons/next.svg" alt="" width={16} height={16} />
          </button>
          <button onClick={goToLastPage} disabled={currentPage === totalPages}>
            <Image src="img/icons/last.svg" alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};
