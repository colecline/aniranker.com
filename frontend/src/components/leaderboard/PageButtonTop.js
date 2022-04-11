import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import PageButtonItem from './PageButtonItem';

export default function PageButtonTop(props) {

    const buttons = [];
    
    function buildItems(currentPageNumber) {
        
        if (!(currentPageNumber == 1)) {
            buttons.push(<a href={`http://localhost:3000/leaderboard/${props.current - 1}`} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span className="sr-only">Previous</span><ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /></a>)
        }

        if (currentPageNumber >= 1 && currentPageNumber <= 3) {
            for (var i = 1; i <= 3; i++) {
                buttons.push(<PageButtonItem isCurrent={i == props.current} number={i} />)
            }
            if (currentPageNumber == 2) {
                addItemsToRight(2, currentPageNumber + 1)
            }
            if (currentPageNumber == 3) {
              addItemsToRight(2, currentPageNumber)
          }
        }

        if (currentPageNumber > 3) {
          buttons.push(<PageButtonItem isCurrent={false} number={1} />)
            buttons.push(<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>)
        }

        if (currentPageNumber > 3 && currentPageNumber <= props.pages - 3) {

            for (var i = currentPageNumber - 1; i <= currentPageNumber + 1; i++) {
              buttons.push(<PageButtonItem isCurrent={i == props.current} number={i} />)
          }

        }

        if (currentPageNumber <= props.pages - 3) {
          buttons.push(<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>)
          buttons.push(<PageButtonItem isCurrent={false} number={props.pages} />)
        }

        if (currentPageNumber > props.pages - 3) {
          for (var i = props.pages - 3; i <= props.pages; i++) {
              buttons.push(<PageButtonItem isCurrent={i == props.current} number={i} />)
          }

        }
        
        if (!(currentPageNumber == props.pages)) {
            buttons.push(<a href={`http://localhost:3000/leaderboard/${props.current + 1}`} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span className="sr-only">Previous</span><ChevronRightIcon className="h-5 w-5" aria-hidden="true" /></a>)
        }

        return buttons;

    }

    function addItemsToRight(amount, currentPageNumber) {
        for (var i = 1; i <= amount; i++) {
            buttons.push(<PageButtonItem isCurrent={false} number={currentPageNumber + i} />)
        }
    }

    return (
    <>
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div class="flex">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
                <div>
                    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-tl-lg rounded-bl-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                </div>
                <div className="bg-indigo-500 hover:bg-indigo-700 rounded-tr-lg rounded-br-lg">
                    <button class="btn px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase shadow-md transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>
            </div>
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