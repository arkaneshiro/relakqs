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
  textInput: {
    background: 'whitesmoke',
  },
  topicButton: {
    margin: '9.5px 0px 9.5px 9.5px'
  },
  leaveButton: {
    margin: '9.5px',
  },
  buttonAndInfoContainer: {
    display: 'flex',
  },
  list: {
    padding: '0px',
  },
  field2: {
    width: '80.4%',
    position: 'absolute',
    top: '45px',
    backgroundColor: 'solid white'
  },
  field: {
    width: '80.4%',
    position: 'absolute',
    bottom: '0px',
  }
}));

export default useStyles;
