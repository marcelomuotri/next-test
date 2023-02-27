import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { iParsedData } from '../../../interfaces/interfaces'
import Star from '@mui/icons-material/Star'
import { Box } from '@mui/material'

interface FormProps {
  cardData: iParsedData
}

const GitCard = ({ cardData }: FormProps) => {

  const elements = Array.from({ length: cardData.score }, (v, i) => i)

  return (
    <Card sx={{ width: 400, height: 250, cursor: 'pointer' }}>
      <CardHeader
        avatar={
          <Avatar src={cardData.owner.avatar_url} aria-label="recipe" alt="Remy Sharp"
            sx={{ width: 70, height: 70 }}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={`Created by: ${cardData.owner.login}`}
        subheader={`Project name: ${cardData.name}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Created: {new Date(cardData.created_at).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last update: {new Date(cardData.updated_at).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Language: {cardData.language}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="body2" color="text.secondary">
            Topics: {cardData.topics.slice(0, 3).join(', ')}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {elements.map((e) => (
            <Star color='warning' key={e} />
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default GitCard
