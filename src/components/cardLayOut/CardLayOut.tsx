import React from 'react'
import { iParsedData } from '../../interfaces/interfaces'
import GitCard from './card/GitCard'
import Grid from '@mui/material/Grid'
import { Pagination } from '@mui/material'
import { iParams } from '../../interfaces/interfaces'

interface CardLayOutProps {
  data: iParsedData[]
  callData: (params: iParams) => void
  params: iParams
}

const CardLayOut = ({ data, callData, params }: CardLayOutProps) => {

  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    callData({ name: params.name, page: value })
  }
  const goToRepository = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Grid container rowSpacing={3} columnSpacing={{ md: 2 }} >
      {data?.map((card: iParsedData, index: number) =>
        <Grid onClick={() => goToRepository(card.html_url)} key={index} container item md={4} justifyContent="center">
          <GitCard cardData={card} />
        </Grid>
      )}
      {data.length > 0 &&
        <Grid item container md={12} justifyContent="center">
          <Pagination style={{ marginBottom: '10px' }} count={5} color="primary" page={page} onChange={handleChange} />
        </Grid>}
    </Grid>

  )
}

export default CardLayOut