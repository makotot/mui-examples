import { ContactMail } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'

const DRAWER_WIDTH = '240px'

export const Dashboard: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          background: '#f2f2f2',
        }}>
        <AppBar
          sx={{
            position: 'fixed',
            marginLeft: DRAWER_WIDTH,
            width: `calc(100% - ${DRAWER_WIDTH})`,
          }}>
          <Toolbar>
            <Typography variant="h4">header</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
            },
          }}>
          <Toolbar />
          <Divider />
          <ListSubheader>Title</ListSubheader>
          <List
            sx={{
              width: '100%',
            }}>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </List>
          <Divider />
          <ListSubheader>Title</ListSubheader>
          <List
            sx={{
              width: '100%',
            }}>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          sx={{
            flex: 1,
            padding: '1rem',
            minHeight: '100vh',
          }}>
          <Toolbar />
          <Stack spacing={2} divider={<Divider />}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>head</TableCell>
                    <TableCell>head</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>head</TableCell>
                    <TableCell>head</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>head</TableCell>
                    <TableCell>head</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>body</TableCell>
                    <TableCell>body</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}
