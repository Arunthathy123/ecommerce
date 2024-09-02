import React from 'react';
import '../../assets/CommonStyle/pagination.css';

const Pagination = (props) => {
  const { filterd_Menu, itemsPerPage, setCurrentPage, currentPage } = props;

  // Calculate the total number of pages
  const numberOfPages = Math.ceil(filterd_Menu.length / itemsPerPage);

  // Determine the range of pages to show
  const step = 2; // Number of pages to show before and after the current page
  const showingNumbers = step * 2 + 1;

  let startNumber = Math.max(1, currentPage - step);
  let endNumber = Math.min(numberOfPages, currentPage + step);

  // Handle the display of "..." in pagination
  const pages = [];
  if (startNumber > 1) {
    pages.push(
      <li key={1} onClick={() => setCurrentPage(1)} className={currentPage === 1 ? 'active' : ''}>
        1
      </li>
    );
    if (startNumber > 2) {
      pages.push(<li key="start-ellipsis" className="ellipsis">...</li>);
    }
  }

  for (let i = startNumber; i <= endNumber; i++) {
    pages.push(
      <li key={i} onClick={() => setCurrentPage(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </li>
    );
  }

  if (endNumber < numberOfPages) {
    if (endNumber < numberOfPages - 1) {
      pages.push(<li key="end-ellipsis" className="ellipsis">...</li>);
    }
    pages.push(
      <li key={numberOfPages} onClick={() => setCurrentPage(numberOfPages)} className={currentPage === numberOfPages ? 'active' : ''}>
        {numberOfPages}
      </li>
    );
  }

  return (
    <section>
      <ul className='pagination flex'>
        {currentPage > 1 && (
          <li className="prev" onClick={() => setCurrentPage(currentPage - 1)}>
            &#x2039;
          </li>
        )}
        {pages}
        {currentPage < numberOfPages && (
          <li className="next" onClick={() => setCurrentPage(currentPage + 1)}>
            &#8250;
          </li>
        )}
      </ul>
    </section>
  );
}

export default Pagination;





// import React from 'react'
// import '../../assets/CommonStyle/pagination.css'
// const Pagination = (props) => {
//   let numberOfPages = [];
//   for(let i = 1;  i<= Math.ceil(props.filterd_Menu.length/ props.itemsPerPage); i++){
//     numberOfPages.push(i)
//   }
//   function showNextDishesHandler(event){
//     let currentPage = event.target.id;
//     props.setCurrentPage(currentPage);
//   }
//   let pages = numberOfPages.map((pageNumber)=>{
//     return <li id= {pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
//   })
//   return (
//       <section>
//         <ul className='pagination flex'>
//           {pages}
//         </ul>
//       </section>
//   )
// }

// export default Pagination



