import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import styles from "./home.module.css";

function SectionThree() {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.section__three}>
            <Grid container >
                <Grid xs={11} >
                    <Typography variant="h3" gutterBottom className={`${styles.community}`}>
                        <strong>
                            Our mission
                        </strong>
                    </Typography>
                    <Grid container >
                        <Grid item md={6} lg={6} xs={12}>
                            <Typography variant="h3" gutterBottom className={`${styles.community} fw-bold`}>
                                Community + Transparency
                            </Typography>
                            <Typography variant="h3" className={`${styles.community} fw-bold`}>
                                = <span className={`${styles.pink} ${styles.community} fw-bold `}>Less Fluff</span>
                            </Typography>
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} className={`${styles.about_us}`}>
                            <Typography variant="body2" gutterBottom>
                                We are sick of the product claims, promoted content, and all the marketing
                                noise out there. Our mission is to build an independent community of skincare
                                reviews to tackle the marketing fluff.
                            </Typography>
                            <Stack spacing={2} direction="row">
                                <Link href="/about">
                                    <Button variant="contained" className={styles.about__us}>About us</Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SectionThree