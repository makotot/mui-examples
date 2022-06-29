import ArrowBack from '@mui/icons-material/ArrowBack'
import GitHub from '@mui/icons-material/Github'
import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'

export const Blog: React.FC = () => {
  useEffect(() => {
    const theme = createTheme()
    console.log(theme.spacing())
  }, [])
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5">header</Typography>
            <Button sx={{ color: 'white' }}>Nav</Button>
            <Button sx={{ color: 'white' }}>Nav</Button>
            <Button sx={{ color: 'white' }}>Nav</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container>
        <Toolbar />
        <Box
          sx={{
            paddingY: 4,
          }}>
          <Stack spacing={2}>
            <Box>
              <Stack spacing={1}>
                <Box sx={{ display: 'inline-flex' }}>
                  <Link href="#">
                    <Stack spacing={1} direction="row">
                      <ArrowBack />
                      <Typography>Back to blog</Typography>
                    </Stack>
                  </Link>
                </Box>
                <Typography variant="caption">
                  Wednesday, Apr 6, 2022
                </Typography>
                <Typography variant="h4">
                  libero volutpat sed cras ornare
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero
                id. Id nibh tortor id aliquet lectus. Tincidunt arcu non sodales
                neque sodales ut etiam sit amet. Semper risus in hendrerit
                gravida rutrum quisque. Accumsan sit amet nulla facilisi morbi.
                Diam quis enim lobortis scelerisque fermentum dui faucibus in.
                Eget nullam non nisi est sit amet facilisis. Sodales ut eu sem
                integer vitae justo eget. Vulputate dignissim suspendisse in est
                ante. Egestas maecenas pharetra convallis posuere morbi leo
                urna. Ac feugiat sed lectus vestibulum mattis ullamcorper.
                Ultrices in iaculis nunc sed augue lacus. Ultrices dui sapien
                eget mi proin sed. Venenatis urna cursus eget nunc. Molestie a
                iaculis at erat pellentesque adipiscing commodo elit at. Quis
                eleifend quam adipiscing vitae. Semper auctor neque vitae tempus
                quam pellentesque nec nam aliquam. Purus viverra accumsan in
                nisl nisi. Suscipit tellus mauris a diam maecenas sed enim ut.
                Vestibulum lorem sed risus ultricies. Nulla facilisi etiam
                dignissim diam quis enim lobortis scelerisque. Mi eget mauris
                pharetra et ultrices neque ornare aenean. Purus ut faucibus
                pulvinar elementum integer enim neque volutpat ac. Urna nec
                tincidunt praesent semper feugiat. Tristique et egestas quis
                ipsum suspendisse. Nec ullamcorper sit amet risus nullam eget.
                Imperdiet proin fermentum leo vel orci porta non pulvinar neque.
                Sed libero enim sed faucibus turpis in eu. Aliquam ut porttitor
                leo a diam sollicitudin tempor id. Enim facilisis gravida neque
                convallis a cras. Nisi porta lorem mollis aliquam ut.
                Suspendisse interdum consectetur libero id faucibus nisl
                tincidunt eget nullam. At ultrices mi tempus imperdiet nulla
                malesuada pellentesque elit eget. Lectus proin nibh nisl
                condimentum id venenatis. Diam phasellus vestibulum lorem sed
                risus ultricies tristique. Tincidunt augue interdum velit
                euismod in pellentesque massa placerat duis. Rhoncus urna neque
                viverra justo. Non sodales neque sodales ut etiam. Dapibus
                ultrices in iaculis nunc sed augue lacus. Dolor sit amet
                consectetur adipiscing. Arcu non odio euismod lacinia at quis
                risus sed vulputate. Vel turpis nunc eget lorem dolor. Pharetra
                vel turpis nunc eget lorem. Tellus molestie nunc non blandit
                massa enim nec. Nunc congue nisi vitae suscipit tellus. A
                condimentum vitae sapien pellentesque habitant morbi. Phasellus
                faucibus scelerisque eleifend donec pretium. Non tellus orci ac
                auctor augue mauris. At in tellus integer feugiat scelerisque.
                Massa tempor nec feugiat nisl pretium fusce id velit ut. Urna
                porttitor rhoncus dolor purus non. Eu volutpat odio facilisis
                mauris sit amet massa. Cras semper auctor neque vitae tempus
                quam pellentesque nec nam. Ultrices sagittis orci a scelerisque
                purus semper eget. Non enim praesent elementum facilisis leo. Id
                nibh tortor id aliquet. Non blandit massa enim nec dui nunc
                mattis enim. Risus quis varius quam quisque id diam vel quam
                elementum. Amet purus gravida quis blandit turpis. Lacus luctus
                accumsan tortor posuere ac ut consequat. Quis vel eros donec ac
                odio tempor orci dapibus. Mi quis hendrerit dolor magna eget.
                Accumsan lacus vel facilisis volutpat est velit egestas. Sed
                risus pretium quam vulputate dignissim. Auctor elit sed
                vulputate mi sit amet. Ullamcorper malesuada proin libero nunc
                consequat interdum. Eget mauris pharetra et ultrices neque
                ornare aenean. Faucibus ornare suspendisse sed nisi lacus sed
                viverra. Auctor elit sed vulputate mi sit amet mauris commodo.
                Vivamus arcu felis bibendum ut tristique et. Pharetra pharetra
                massa massa ultricies mi quis. Eget nunc lobortis mattis aliquam
                faucibus purus in massa tempor. Semper quis lectus nulla at
                volutpat. Turpis egestas pretium aenean pharetra. Sapien
                pellentesque habitant morbi tristique. Facilisi etiam dignissim
                diam quis enim lobortis scelerisque fermentum dui. Tristique
                senectus et netus et. Et molestie ac feugiat sed. Commodo nulla
                facilisi nullam vehicula ipsum a arcu cursus vitae. Viverra nam
                libero justo laoreet sit amet cursus. Ac tincidunt vitae semper
                quis. Viverra orci sagittis eu volutpat. Diam quis enim lobortis
                scelerisque.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Box
          sx={{
            paddingY: 2,
          }}>
          <Grid container direction={'row'} justifyContent="space-between">
            <Grid item>
              <Typography>Copyright © 2022 example</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <GitHub />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
