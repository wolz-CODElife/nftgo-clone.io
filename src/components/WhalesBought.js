import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import { IconCaretDown, IconGreaterThan, IconInfo, IconLessThan } from '../assets/icons/icons';
import { lightColors, typographySize } from '../helpers/theme';
import {buySell, timeRange} from '../assets/data/TableFilters'
import {WhalesBoughtHeading} from '../assets/data/TableHeading'
import { WhalesBoughtRows } from '../assets/data/TableRows';

function createData(nft, collection, price, change, seller, buyer, time) {
  return { nft, collection, price, change, seller, buyer, time };
}

const rows = WhalesBoughtRows.map(row => createData(...row));
export default function WhalesBought() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageNav, setPageNav] = useState([])
  const [action, setAction] = useState("buy")
  const [timeRank, setTimeRank] = useState("1h")
  const [sort, setSort] = useState({ by: "price", asc: "-1" })

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
        <h1>Whales Bought(1H) <Tooltip title="The NFTs whales bought over the selected time range." arrow placement='top'><span><IconInfo /></span></Tooltip></h1>
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
              {WhalesBoughtHeading.map(heading => (
                <TableCell key={heading.title} align={heading.align || "left"} className={`${heading.title === "NFT" ? "row_header" : ""} ${sort.by === heading.by ? sort.asc === "1" ? "asc up" : "asc down" : ""}`}>
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
                  <Tooltip arrow placement='top' title={<img src={row.nft.img} alt={row.nft.name} style={{width: "120px", height: "120px"}} />}><img src={row.nft.img} alt={row.nft.name} /></Tooltip>
                  <span> {row.nft.name} </span>
                </TableCell>
                <TableCell align="left">
                  <Tooltip arrow placement='top' title={row.collection.name}><img src={row.collection.img} alt={row.collection.name} /></Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={`$${Math.ceil(row.price * 2500)}`}><span>{row.price || "--"} ETH</span></Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={`$${Math.ceil(row.change.price * 2500)}`}><span>{row.change.price || "--"} ETH</span></Tooltip>
                  {row.change.percent >= 0 ? <span className='green'>+{row.change.percent || "--"}%</span> : <span className='red'>{row.change.percent || "--"}%</span>}
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={row.seller}><span>{row.seller.split("").slice(0, 8).join("")}</span></Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip arrow placement='top' title={row.buyer}><span>🐋 {row.buyer.split("").slice(0, 8).join("")}</span></Tooltip>
                </TableCell>
                <TableCell align="right">
                    <a href="http://etherscan.io" target="_blank" rel="noopener noreferrer">{row.time}</a>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={WhalesBoughtHeading.length} />
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

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 10px;
      }
      
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

      a {
          color: ${lightColors.black};
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