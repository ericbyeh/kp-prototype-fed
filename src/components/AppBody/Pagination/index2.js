import React, { Component } from 'react';

class Pagination extends React.Component {

  render() {
    return (
    <div class="kpPagination">
        <div class="kpPagination__count" id="page">
            <p>
                <span class="kpPagination__fromIndex">1 - 10  of</span>
                <span class="kpPagination__totalItems"> 36 items</span>
            </p>
        </div>
        <nav aria-label="Page" class="kpPagination__nav" role="navigation">
            <ul class="kpPagination__list">
                <li class="kpPagination__item -prev -disabled" id="buttonPrevious">
                    <a class="kpPagination__link" tabindex=" -1">
                        <span class="screenreader-only">Previous Page 1</span><span aria-hidden="true" role="presentation">
                        <i class="icon-chevron-back"></i></span>
                    </a>
                </li>
                <span class="kpPagination__list-numbers" id="pagination">
                <li class="kpPagination__item -page -active">
                    <a class="kpPagination__link" href="javascript:void(0)">
                        <span class="screenreader-only">page</span>
                        <span class="kpPagination__pageIndex">1</span></a>
                    </li>
                <li class="kpPagination__item -page">
                    <a class="kpPagination__link" href="javascript:void(0)">
                        <span class="screenreader-only">page</span>
                        <span class="kpPagination__pageIndex">2</span>
                    </a>
                </li>
                <li class="kpPagination__item -page">
                    <a class="kpPagination__link" href="javascript:void(0)">
                        <span class="screenreader-only">page</span>
                        <span class="kpPagination__pageIndex">3</span>
                    </a>
                </li>
                <li class="kpPagination__item -page">
                    <a class="kpPagination__link" href="javascript:void(0)">
                        <span class="screenreader-only">page</span>
                        <span class="kpPagination__pageIndex">4</span>
                    </a>
                </li>
                <li class="kpPagination__item -page">
                    <a class="kpPagination__link" href="javascript:void(0)">
                        <span class="screenreader-only">page</span>
                        <span class="kpPagination__pageIndex">5</span>
                    </a>
                </li>
                </span>
                <li class="kpPagination__item-dropdown">
                    <select aria-label="Go to page" class="kpPagination__select" id="kpPagination__select">
                        <option class="kpPagination__option -page -active" value="1"> 1</option>
                        <option class="kpPagination__option -page" value="2"> 2</option>
                        <option class="kpPagination__option -page" value="3"> 3</option>
                        <option class="kpPagination__option -page" value="4">4 </option>
                        <option class="kpPagination__option -page" value="4">5</option>
                    </select>
                    <span aria-hidden="true" class="icon-chevron-down kpPagination__selectIcon"></span>
                    <p class="kpPagination__totalPages">of 5 pages</p>
                </li>
                <li class="kpPagination__item -next" id="buttonNext">
                    <a class="kpPagination__link">
                        <span class="screenreader-only">Next Page</span><span aria-hidden="true" role="presentation">
                        <i class="icon-chevron-forward"></i></span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    );
  }
}

export default Pagination;
