import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '260px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '5px',
  },
  messageContainer: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  messageTitle: {
    margin: '16px 5px',
    position: 'absolute'
  },
  expand: {
    transform: 'rotate(270deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
}));

export default useStyles;
