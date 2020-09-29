import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80.4%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    paddingLeft: '9.5px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 'xx-large',
  },
  topic: {
    paddingTop: '12px',
  },
  topicButton: {
    margin: '9.5px 0px 9.5px 9.5px'
  },
  leaveButton: {
    margin: '9.5px',
  },
  buttonContainer: {
    display: 'flex',
  },
  list: {
    padding: '0px',
  },
  field: {
    width: '80.4%',
    position: 'absolute',
    bottom: '0px',
  }
}));

export default useStyles;
