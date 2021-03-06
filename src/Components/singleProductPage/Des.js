import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Description from "./Description";
import Information from "./Information";
import Review from "./Review";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container style={{
                paddingTop: '40px',
                borderBottom: '1px solid gray'
            }}>
                <AppBar style={{
                    backgroundColor: 'transparent',
                    color: '#6c757d',
                    boxShadow: 'none',
                }} position="static">
                    <Tabs style={{
                        justifyContent:'space-between'
                    }} value={value} onChange={handleChange}>
                        <Tab label="DESCIPTION" {...a11yProps(0)} />
                        <Tab label="INFORMATION" {...a11yProps(1)} />
                        <Tab label="REVIEWS" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Description />
                </TabPanel>
                <TabPanel value={value} index={1}>
                   <Information />
                </TabPanel>
                <TabPanel value={value} index={2}>
                   <Review />
                </TabPanel>
            </Container>
        </>
    );
}
