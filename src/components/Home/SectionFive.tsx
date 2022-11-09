import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from "./home.module.css";

function SectionFive(props) {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.section__five}>
            <Grid container>
                <Grid md={10} lg={11} xs={12} style={{ margin: "auto" }}>
                    <Grid container>
                        <Grid item md={7} lg={6} xs={12} className={`${styles.section_five}`}>
                            <Typography variant="h3" gutterBottom className="fw-bold">
                              Ready to avoid the
                            </Typography>
                            <Typography variant="h3">
                              <span className={`${styles.pink} fw-bold`}>marketing fluff?</span>
                            </Typography>
                        </Grid>
                        <Grid item md={5} lg={6} xs={12}>
                            <Stack spacing={2} direction="row" className={styles.join__fluffie}>
                                <Button variant="contained" onClick={() => props.state.state.setState(true)}>Join Fluffie</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SectionFive