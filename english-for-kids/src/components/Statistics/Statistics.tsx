import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { ActiveRow, StatisticsItem, TableData } from '../../interface';
import { Nullable } from '../../types/types';
import { DEFAULT_ACTIVE_ROW } from '../../const/const';
import { formingListWords, sortTable } from '../../utils/utils';
import {
  Box,
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ButtonBack from "../../common/Button/ButtonBack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = ['Word', 'Translation', 'Category', 'Clicks', 'Correct', 'Wrong', '% errors'];

export const Statistics: FC = () => {
  const [tableData, setTableData] = useState<Nullable<TableData>>(null);

  const handleClickRow = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;
    if (tableData !== null && target.innerText.includes(tableData.activeRow.title)) {
      setTableData((prevState) => ({
        activeRow: {
          ...prevState?.activeRow,
          direction: !prevState?.activeRow.direction,
        } as ActiveRow,
        cards: sortTable(
          prevState?.cards as StatisticsItem[],
          prevState?.activeRow.title.toLowerCase() as string,
          !prevState?.activeRow.direction as boolean
        ),
      }));
    } else {
      setTableData((prevState) => ({
        activeRow: {
          title: target.innerText,
          direction: true,
        },
        cards: sortTable(
          prevState?.cards as StatisticsItem[],
          target.innerText.toLowerCase(),
          true
        ),
      }));
    }
  };

  useEffect(() => {
    const activeRow = JSON.parse(
      localStorage.getItem('activeRow') || JSON.stringify(DEFAULT_ACTIVE_ROW)
    );
    const cards = JSON.parse(localStorage.getItem('cards') || '[]');

    if (activeRow && cards) {
      formingListWords();
      setTableData({ activeRow, cards });
    }
  }, []);

  return (
    tableData && (
      <Container
        className={'layout'}
        sx={{
          paddingTop: '10px',
          height: '100vh',
          margin: 0,
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
        }}
      >
        <Box
          sx={{
            marginBottom: '10px'
          }}
        >
          <ButtonBack />
        </Box>
        <TableContainer
          sx={{
            height: '85%'
          }}
          component={Paper}>
          <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {rows.map((row) => {
                  if (row === tableData?.activeRow.title) {
                    return (
                      <StyledTableCell
                        sx={{
                          cursor: 'pointer',
                        }}
                        onClick={handleClickRow}
                        key={row}
                      >{`${tableData.activeRow.direction ? '↓' : '↑'} ${row}`}</StyledTableCell>
                    );
                  }
                  return (
                    <StyledTableCell
                      sx={{
                        cursor: 'pointer',
                      }}
                      onClick={handleClickRow}
                      key={row}
                    >
                      {row}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.cards.map((card) => (
                <StyledTableRow hover key={card.word}>
                  <StyledTableCell component="td" scope="row">
                    {card.word}
                  </StyledTableCell>
                  <StyledTableCell>{card.translation}</StyledTableCell>
                  <StyledTableCell>{card.category}</StyledTableCell>
                  <StyledTableCell>{card.clicks}</StyledTableCell>
                  <StyledTableCell>{card.correct}</StyledTableCell>
                  <StyledTableCell>{card.wrong}</StyledTableCell>
                  <StyledTableCell>{card.percent}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  );
};

export default Statistics;
