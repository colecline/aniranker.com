import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import PageButtonItem from './PageButtonItem';

export default function PageButton(props) {

  const buttons = [];
    
  function buildItems(currentPageNumber) {
      
      if (!(currentPageNumber == 1)) {
          buttons.push(<a href={`http://aniranker.com/leaderboard/${props.type}/${props.current - 1}`} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span className="sr-only">Previous</span><ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /></a>)
      }

      if (currentPageNumber >= 1 && currentPageNumber <= 3) {
          for (var i = 1; i <= 3; i++) {
              buttons.push(<PageButtonItem isCurrent={i == props.current} type={props.type} number={i} />)
          }
          if (currentPageNumber == 2) {
              addItemsToRight(2, currentPageNumber + 1)
          }
          if (currentPageNumber == 3) {
            addItemsToRight(2, currentPageNumber)
        }
      }

      if (currentPageNumber > 3) {
        buttons.push(<PageButtonItem isCurrent={false} type={props.type} number={1} />)
          buttons.push(<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>)
      }

      if (currentPageNumber > 3 && currentPageNumber <= props.pages - 3) {

          for (var i = currentPageNumber - 1; i <= currentPageNumber + 1; i++) {
            buttons.push(<PageButtonItem isCurrent={i == props.current} type={props.type} number={i} />)
        }

      }

      if (currentPageNumber <= props.pages - 3) {
        buttons.push(<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>)
        buttons.push(<PageButtonItem isCurrent={false} type={props.type} number={props.pages} />)
      }

      if (currentPageNumber > props.pages - 3) {
        for (var i = props.pages - 3; i <= props.pages; i++) {
            buttons.push(<PageButtonItem isCurrent={i == props.current} type={props.type} number={i} />)
        }

      }
      
      if (!(currentPageNumber == props.pages)) {
          buttons.push(<a href={`http://aniranker.com/leaderboard/${props.type}/${props.current + 1}`} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span className="sr-only">Previous</span><ChevronRightIcon className="h-5 w-5" aria-hidden="true" /></a>)
      }

      return buttons;

  }

  function addItemsToRight(amount, currentPageNumber) {
      for (var i = 1; i <= amount; i++) {
          buttons.push(<PageButtonItem isCurrent={false} type={props.type} number={currentPageNumber + i} />)
      }
  }

    return (
    <>
    <div className="bg-gray-200 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="font-lato text-sm text-gray-700">
            Listing {props.type} Ranked <span className="font-semibold">{props.startIndex}</span> thru <span className="font-semibold">{props.endIndex}</span> out of{' '}
            <span className="font-medium">{props.numberOfChars}</span>.
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {buildItems(props.current)}
          </nav>
        </div>
      </div>
    </div>
    </>
    )
}