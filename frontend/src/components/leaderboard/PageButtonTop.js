import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import PageButtonItem from './PageButtonItem';

export default function PageButtonTop(props) {

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
          buttons.push(<a href={`http://aniranker.com/leaderboard/${props.type}/${props.current + 1}`} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span className="sr-only">Previous</span><ChevronRightIcon className="h-5 w-5" aria-hidden="true" /></a>)
      }

      return buttons;

  }

  function addItemsToRight(amount, currentPageNumber) {
      for (var i = 1; i <= amount; i++) {
          buttons.push(<PageButtonItem isCurrent={false} type={props.type} number={currentPageNumber + i} />)
      }
  }

  function showLeaderboardTypebutton() {
    if (props.type === "characters") {
      return (
        <>
        <button className='bg-indigo-500 text-white px-2 py-1 text-sm font-bold rounded-tl-md rounded-bl-md'>
          <a href="javascript:void(0);">Characters</a>
        </button>
        <button className='bg-gray-300 text-gray-500 px-2 py-1 text-sm font-bold rounded-tr-md rounded-br-md'>
          <a href="http://aniranker.com/leaderboard/anime">Anime</a>
        </button>
        </>
      )
    } else {
      return (
        <>
        <button className='bg-gray-300 text-gray-500 px-2 py-1 text-sm font-bold rounded-tl-md rounded-bl-md'>
          <a href="http://aniranker.com/leaderboard/characters">Characters</a>
        </button>
        <button className='bg-indigo-500 text-white px-2 py-1 text-sm font-bold rounded-tr-md rounded-br-md'>
          <a href="javascript:void(0);">Anime</a>
        </button>
        </>
      )
    }
  }

    return (
    <>
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className='flex'>
          <h1 className="text-xl font-bold">Leaderboard</h1>
          <span className='my-auto ml-2 text-sm text-gray-500'>(Rank {props.startIndex}-{props.endIndex})</span>
          <div className='ml-4'>
            {showLeaderboardTypebutton()}
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