import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	formStyles: {
		maxWidth: '600px',
		width: '100%',
		margin: 'auto'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

function CreateNewPost() {
	const classes = useStyles();
	return (
		<Grid container justify="flex-start" className={classes.formStyles}>
			<Grid item sm={6}>
				<FormControl>
					<InputLabel htmlFor="my-title">Title</InputLabel>
					<Input id="my-input" aria-describedby="my-title-input" />
				</FormControl>
			</Grid>
			<Grid item sm={6}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">Category</InputLabel>
					<Select labelId="demo-simple-select-label" id="demo-simple-select">
						<MenuItem value="article">Article</MenuItem>
						<MenuItem value="report">Report</MenuItem>
						<MenuItem value="webinar">Webinar</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item sm={6}>
				<FormControl>
					<InputLabel htmlFor="my-input">Email address</InputLabel>
					<Input id="my-input" aria-describedby="my-helper-text" />
					<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
				</FormControl>
			</Grid>
		</Grid>
	);
}

export default CreateNewPost;
