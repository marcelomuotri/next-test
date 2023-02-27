import React, { useState } from 'react'
import Form from './form/Form'
import CardLayOut from './cardLayOut/CardLayOut'
import { getServerSideProps } from '../utils/helpers'
import { iParsedData, iParams } from '../interfaces/interfaces'
import { Grid } from '@mui/material'

const App = () => {

    const [data, setData] = useState<iParsedData[]>([])
    const [params, setParams] = useState<iParams>({})

    const callData = async (params: iParams ) => {
        const response = await getServerSideProps(params)
        const parsedData = response.props.data.items.map((item: iParsedData) => {
            const { name, description, html_url, updated_at, created_at, language, topics, score, owner } = item
            return { name, description, html_url, updated_at, created_at, language, topics, score, owner }
        })
        setData(parsedData)
    }

    const formProps = {
        callData,
        params,
        setParams
    }

    const cardLayoutProps = {
        data,
        callData,
        params
    }
    return (
        <Grid>
            <Grid item container md={12} justifyContent="center">
                <Form data-testid="form" {...formProps} />
            </Grid>
            <CardLayOut data-testid="card-layout" {...cardLayoutProps} />
        </Grid>
    )
}

export default App