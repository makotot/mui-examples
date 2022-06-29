import { Apple, Google, LoginSharp } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

export const Login: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#161616',
        minHeight: '100vh',
      }}>
      <Card
        sx={{
          width: `calc(50vw - 4rem)`,
          marginX: '2rem',
          padding: '1rem',
        }}>
        <form>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h4">Login</Typography>
              <FormControl variant="standard">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" />
              </FormControl>
              <Button variant="contained" startIcon={<LoginSharp />}>
                Login with email
              </Button>
            </Stack>
            <Divider>
              <Chip label="OR" />
            </Divider>
            <Stack spacing={2}>
              <Button variant="outlined" endIcon={<Google />} size="small">
                Login with Google
              </Button>
              <Button variant="outlined" endIcon={<Apple />} size="small">
                Login with Apple
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Box>
  )
}
