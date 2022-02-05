import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import { IconCaretDown, IconGreaterThan, IconInfo, IconLessThan } from '../assets/icons/icons';
import { lightColors, typographySize } from '../helpers/theme';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Fishes', 262, 16.0, 24, 6.0),
  createData('Sharwama', 262, 16.0, 24, 6.0),
  createData('Hotdog', 262, 16.0, 24, 6.0),
  createData('French Fries', 262, 16.0, 24, 6.0),
  createData('ChunkPop', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageNav, setPageNav] = useState([])
  const [action, setAction] = useState("buy")
  const [timeRank, setTimeRank] = useState("1h")

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

  return (
    <TableContainer component={StyledTable}>
      <TableHeading>
        <h1>Most Whales Involved(1H) <Tooltip title="The collections that most whales bought or sold NFTs from over the selected time range." arrow placement='top'><span><IconInfo /></span></Tooltip></h1>
        <div className="filters">
          <div className="filter">
            {[{
                title: "Buy", value: "buy"
              }, {
                title: "Sell", value: "sell"
              }].map(action => (
                <button key={action.title} onClick={(e) => handleAction(e, action.value)} className={action === action.value? "active" : ""}>{action.title}</button>
              ))
            }
          </div>
          <div className="filter">
            {[{
                title: "1H",
                value: "1h"
              }, {
                title: "6H",
                value: "6h"
              }, {
                title: "12H",
                value: "12h"
              }, {
                title: "24H",
                value: "24h"
              }, {
                title: "7D",
                value: "7D"
              }, {
                title: "30D",
                value: "30D"
              }].map(time => (
                <button key={time.title} onClick={(e) => handleTimeRank(e, time.value)} className={timeRank === time.value? "active" : ""}>{time.title}</button>
              ))
            }
          </div>
        </div>
      </TableHeading>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>
              <PaginContainer page={page} count={rows.length} 
                rowsPerPage={rowsPerPage} onPageChange={handleChangePage} 
                rowsPerPageOptions={[5, 10, 25]} pageNav={pageNav}
                onRowPerPageChange={handleChangeRowsPerPage} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const PaginContainer = (props) => {
  const {page, count, rowsPerPage, pageNav, onPageChange, onRowPerPageChange, rowsPerPageOptions} = props
  return (
    <Pagination colSpan={5}>
      <p>Showing {(rowsPerPage * page) + 1}-{rowsPerPage * (page + 1)} out of {count}</p>
      <div className="nav">
        <button className="nav_btn"><IconLessThan /></button>
        {pageNav.map(nav => (
          <button key={nav} onClick={(e) => onPageChange(e, nav)} className={(nav - 1) === page? "nav_num active": "nav_num"}>{nav}</button>
        ))}
        <button className="nav_btn"><IconGreaterThan /></button>
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
  margin: 24px 0px;
  
  tr {
    th {
      border-bottom: none;
    }
    
    td {
      border-bottom: none;
    }
    
    &:nth-of-type(odd) {
      background: #f9f9fc;
    }
    &:nth-of-type(even) {
      background: none;
    }
  }
  tfoot {
    tr {
      background: ${lightColors.white} !important;
    }
  }
  thead {
    tr {
      background: ${lightColors.white} !important;
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
`

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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