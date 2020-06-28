import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  field: {
    marginTop: theme.spacing(.5),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
  },
  submit_guest: {
    margin: theme.spacing(0, 0, 1),
  },
  form_change: {
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;