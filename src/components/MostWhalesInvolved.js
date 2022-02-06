import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import { IconBought, IconCaretDown, IconGreaterThan, IconInfo, IconLessThan } from '../assets/icons/icons';
import { lightColors, typographySize } from '../helpers/theme';
import {buySell, timeRange} from '../assets/data/TableFilters'
import {MostWhalesInvolvedHeading} from '../assets/data/TableHeading'
import { MostWhalesInvolvedRows } from '../assets/data/TableRows';

function createData(collection, whaleNum, bought, whaleVol, totalVol, floorPrice, avgPrice, marketCap) {
  return { collection, whaleNum, bought, whaleVol, totalVol, floorPrice, avgPrice, marketCap };
}

const rows = MostWhalesInvolvedRows.map(row => createData(...row));

export default function MostWhalesInvolved() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageNav, setPageNav] = useState([])
  const [action, setAction] = useState("buy")
  const [timeRank, setTimeRank] = useState("1h")
  const [sort, setSort] = useState({ by: "WhaleNum", asc: "-1" })

  useEffect(() => {
    let newPageNav = []
    for (let i = 1; i < (rows.length/rowsPerPage) + 1; i++) {
      newPageNav.push(i)
    }
    setPageNav(newPageNav)
  }, [rowsPerPage])


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    event.preventDefault()
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAction = (event, action) => {
    event.preventDefault()
    setAction(action)
  }

  const handleTimeRank = (event, timeRank) => {
    event.preventDefault()
    setTimeRank(timeRank)
  }

  const handleSortHeading = (byValue) => {
    if(sort.by === byValue){
      if(sort.asc === "-1"){
        setSort({by: byValue, asc: "1"})
      }
      else{
        setSort({by: byValue, asc: "-1"})
      }
    }
    else{
      setSort({by: byValue, asc: "-1"})
    }
  }

  return (
    <TableContainer component={StyledTable}>
      <TableHeading>
        <h1>Most Whales Involved(1H) <Tooltip title="The collections that most whales bought or sold NFTs from over the selected time range." arrow placement='top'><span><IconInfo /></span></Tooltip></h1>
        <div className="filters">
          <div className="filter">
            {buySell.map(acXn => (
                <button key={acXn.title} onClick={(e) => handleAction(e, acXn.value)} className={action === acXn.value? "active" : ""}>{acXn.title}</button>
              ))
            }
          </div>
          <div className="filter">
            {timeRange.map(time => (
                <button key={time.title} onClick={(e) => handleTimeRank(e, time.value)} className={timeRank === time.value? "active" : ""}>{time.title}</button>
              ))
            }
          </div>
        </div>
      </TableHeading>
      <div className="table_responsive">
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              {MostWhalesInvolvedHeading.map(heading => (
                <TableCell key={heading.title} align={heading.align || "left"} className={`${heading.title === "Collection" ? "row_header" : ""} ${sort.by === heading.by ? sort.asc === "1" ? "asc up" : "asc down" : ""}`}>
                  <span onClick={() => handleSortHeading(heading.by)}>
                    {heading.by && <IconCaretDown />} {heading.title} 
                    {heading.info && <Tooltip title={heading.info} arrow placement='top'><span><IconInfo /></span></Tooltip> }
                  </span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.collection.name} >
                <TableCell className="row_header">
                  <img src={row.collection.img} alt="" />
                  <span> {row.collection.name} </span>
                </TableCell>
                <TableCell align="right">{row.whaleNum}</TableCell>
                <TableCell align="right">{row.bought} <IconBought /> </TableCell>
                <TableCell align="right">${row.whaleVol}</TableCell>
                <TableCell align="right">
                  <span> ${row.totalVol.price || "--"} </span>
                  {row.totalVol.percent > 0 ? <span className='green'>+{row.totalVol.percent || "--"}%</span> : <span className='red'>{row.totalVol.percent || "--"}%</span>}
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={`$${Math.ceil(row.floorPrice.price * 2500)}`}><span>{row.floorPrice.price || "--"} ETH</span></Tooltip>
                  {row.floorPrice.percent >= 0 ? <span className='green'>+{row.floorPrice.percent || "--"}%</span> : <span className='red'>{row.floorPrice.percent || "--"}%</span>}
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={`$${Math.ceil(row.avgPrice.price * 2500)}`}><span>{row.avgPrice.price || "--"} ETH</span></Tooltip>
                  {row.avgPrice.percent >= 0 ? <span className='green'>+{row.avgPrice.percent || "--"}%</span> : <span className='red'>{row.avgPrice.percent || "--"}%</span>}
                </TableCell>
                <TableCell align="right">
                  <span> {row.marketCap.price || "--"} </span>
                  {row.marketCap.percent >= 0 ? <span className='green'>+{row.marketCap.percent || "--"}%</span> : <span className='red'>{row.marketCap.percent || "--"}%</span>}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={MostWhalesInvolvedRows.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <PaginContainer page={page} count={rows.length} 
        rowsPerPage={rowsPerPage} onPageChange={handleChangePage} 
        rowsPerPageOptions={[5, 10, 25]} pageNav={pageNav}
        onRowPerPageChange={handleChangeRowsPerPage} />
    </TableContainer>
  );
}

const PaginContainer = (props) => {
  const {page, count, rowsPerPage, pageNav, onPageChange, onRowPerPageChange, rowsPerPageOptions} = props
  return (
    <Pagination >
      <p>Showing {(rowsPerPage * page) + 1}-{rowsPerPage * (page + 1)} out of {count}</p>
      <div className="nav">
        <button className="nav_btn" onClick={(e) => {page > 0 && onPageChange(e, parseInt(page))}}><IconLessThan /></button>
        {pageNav.map(nav => (
          <button key={nav} onClick={(e) => onPageChange(e, nav)} className={(nav - 1) === page? "nav_num active": "nav_num"}>{nav}</button>
        ))}
        <button className="nav_btn" onClick={(e) => {page < (pageNav.length - 1) && onPageChange(e, parseInt(page + 2))}}><IconGreaterThan /></button>
      </div>
      <div className="select_group">
        Rows <span>{rowsPerPage} <IconCaretDown /></span>
        <select onChange={onRowPerPageChange}>
          {rowsPerPageOptions.map(item => (
            <option key={item} value={item}>{item}</option>
            ))}
        </select>
      </div>
    </Pagination>
  )
}

const StyledTable = styled.div`
  border-radius: 12px;
  background: ${lightColors.white};
  margin-top: 24px;
  
  .table_responsive {
    max-width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar 
    // TO-DO:: Reduce the size
    }
  }
  
  .row_header {
    position: sticky;
    left: 0px;
    min-width: 220px;
    display: flex;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  th {
    &.row_header {
      position: sticky;
      left: 0px;
      min-width: 220px;
    
      background: ${lightColors.white};
    }
  }

  tr {
    th {
      border-bottom: none;
    }
    
    td {
      border-bottom: none;
      
      span {
        display: block;

        &.green {
          color: #269958;
          font-weight: bold;
        }

        &.red {
          color: #EB5757;
          font-weight: bold;
        }
      }
    }
    
    &:nth-of-type(odd) {
      td {
        background: #f9f9fc;
      }
    }

    &:nth-of-type(even) {
      td {
        background: ${lightColors.white};
      }
    }
  }
  tfoot {
    tr {
      background: ${lightColors.white} !important;

      td {  
        position: sticky;
        left: 0px;
        min-width: 220px;
      }
    }
  }
  thead {
    tr {
      background: ${lightColors.white} !important;
      border-bottom: 1px solid #EDEDF1;

      th {
        font-weight: bold;
        font-family: Poppins;
        width: max-content;
        
        &.asc {
          border-bottom: 4px solid ${lightColors.brandBlue};

          &.up {
            svg {
              &:first-of-type {
                transform: rotateX(180deg)
              }
            }
          }
        }

        span {
          display: flex;
          align-items: center;
          white-space: nowrap;
          height: 100%;
          cursor: pointer;

          svg {
            margin: 0px 5px;
          }
        }
      }
    }
  }

`

const TableHeading = styled.div`
  border-bottom: 1px solid #EDEDF1;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${typographySize.lg};
  }

  .filters {
    display: flex;
    align-items: center;

    .filter {
      margin: 0px 5px;
      background: ${lightColors.bgBlue};
      padding: 5px 0px;
      display: flex;
      align-items: center;
      border-radius: 6px;

      button {
        flex: 1;
        margin: 0px 5px;
        height: 30px;
        width: 50px;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 6px;
      }

      .active {
        background: ${lightColors.white};
        color: ${lightColors.brandBlue};
        font-weight: bold;
      }

      &:last-of-type {
        button {
          width: max-content;
          padding: 0px 10px;
        }

        .active {
          color: ${lightColors.white};
          background: ${lightColors.brandBlue};
        }
      }
    }
  }
`

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;

  p {
    font-size: ${typographySize.md};
  }

  .nav {
    display: flex;
    align-items: center;

    button {
      margin: 0px 12px;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
    }

    .nav_btn {
      svg {
        stroke: ${lightColors.brandBlue};
        width: 12px;
        height: 13px;
      }

      &:last-of-type {
        svg {
          transform: rotateY(180deg)
        }
      }
    }
    

    .nav_num {
      height: 34px;
      width: 34px;
      font-size: ${typographySize.md};
      border-radius: 12px;
      color: ${lightColors.black};

      &.active {
        color: ${lightColors.white};
        background: ${lightColors.brandBlue}
      }
    }
  }

  .select_group {
    border: 1px solid #EDEDF1;
    border-radius: 12px;
    height: 40px;
    width: 130px;
    font-size: ${typographySize.md};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
      margin-left: 10px;
      display: flex;
      align-items: center;
      color: ${lightColors.black};

      svg {
        margin-left: 10px;
      }
    }

    select {
      border: none;
      background: none;
      outline: none;
      margin-left: 10px;
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 100;
      opacity: 0;
    }
  }
`